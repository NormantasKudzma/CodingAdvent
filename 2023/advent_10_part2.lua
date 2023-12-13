local tile_start = 'S'

local connections = {
  ['-'] = { {x=-1, y=0}, {x=1,y=0} },
  ['|'] = { {x=0, y=-1}, {x=0,y=1} },
  ['F'] = { {x=0, y=1}, {x=1,y=0} },
  ['J'] = { {x=0,y=-1}, {x=-1, y=0} },
  ['L'] = { {x=0, y=-1}, {x=1,y=0} },
  ['7'] = { {x=0, y=1}, {x=-1,y=0} }
}

local equals = function(a, b)
  return a.x == b.x and a.y == b.y
end

local follow = function(input, pos, path)
  local at = input[pos.y][pos.x]
  
  repeat 
    if (at == nil or not connections[at]) then
      
      return nil
    end
    
    local old_pos = pos
    for _, c in ipairs(connections[at]) do
      local try = { x = pos.x + c.x, y = pos.y + c.y }
      if (not equals(path[#path], try)) then
        table.insert(path, pos)
        pos = try
        at = input[pos.y][pos.x]
        break
      end
    end
    
    if (equals(old_pos, pos)) then 
      return nil
    end
  until (at == tile_start)
  
  return path
end

local find_loop = function(input, pos)
  local try_positions = {
    { x = 1,  y = 0  },
    { x = -1, y = 0 },
    { x = 0,  y = 1  },
    { x = 0,  y = -1 }
  }
  
  for _, delta in ipairs(try_positions) do
    local try = { x=pos.x + delta.x, y=pos.y + delta.y }
    for _, c in ipairs(connections[input[try.y][try.x]] or {}) do
      if (c.x == -delta.x and c.y == -delta.y) then
        local loop = follow(input, try, { pos })
        if (loop) then return loop end
        break
      end
    end
  end
end

local input = {
".F----7F7F7F7F-7....",
".|F--7||||||||FJ....",
".||.FJ||||||||L7....",
"FJL7L7LJLJ||LJ.L-7..",
"L--J.L7...LJS7F-7L7.",
"....F-J..F7FJ|L7L7L7",
"....L7.F7||L7|.L7L7|",
".....|FJLJ|FJ|F7|.LJ",
"....FJL-7.||.||||...",
"....L---J.LJ.LJLJ...",
}

local start = {}

for i, v in ipairs(input) do
  local str = input[i]
  local nums = {}
  for j = 1, #str do
    local as_num = string.char(string.byte(str, j))
    table.insert(nums, as_num)
    if (as_num == tile_start) then
      start.x = j
      start.y = i
    end
  end
  input[i] = nums
end

local get_row = function(path, at_y)
  local row = {}
  for _, p in ipairs(path) do
    if (p.y == at_y) then
      table.insert(row, p.x)
    end
  end
  
  table.sort(row)
  return row
end

local get_num_enclosed = function(path)
  local from_y = #input
  local to_y = 1
  
  for _, p in ipairs(path) do
    from_y = math.min(from_y, p.y)
    to_y = math.max(to_y, p.y)
  end
  
  print('From y ' .. from_y .. ', to y ' .. to_y)
  
  local enclosed = {}
  for y = from_y, to_y do
    local row = get_row(path, y)
    print('Row.. ' .. y)
      
    --for j = 1, #row - 1, 2 do
    --  local from_x = row[j]
    --  local to_x = row[j + 1]
    --  print('  From x ' .. from_x .. ', to x ' .. to_x)
    --  enclosed = enclosed + (to_x - from_x - 1)
    --  print('  From x ' .. from_x .. ', to x ' .. to_x)
    --end
    
    local on = false
    local prev = 1
    for _, x in ipairs(row) do
      if (on) then
        table.insert(enclosed, {x=x, y=y})
      end
      on = not on
      prev = x
    end
  end
  
  return enclosed
end

local o_print = print
--print = function() end
local loop = find_loop(input, start)
local enclosed = get_num_enclosed(loop)
print = o_print

local only_path = {}
for y = 1, #input do
  local row = {}
  for x = 1, #input[y] do
    table.insert(row, '.')
  end
  table.insert(only_path, row)
end

for _, p in ipairs(loop) do
  only_path[p.y][p.x] = 'x'  
end

for _, p in ipairs(enclosed) do
  only_path[p.y][p.x] = 'O'  
end

for y = 1, #input do
  print(table.concat(only_path[y], ''))  
end
