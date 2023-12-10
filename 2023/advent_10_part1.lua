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
    print('Im at ' .. at .. '(' .. pos.x .. ' ' .. pos.y .. ')')
    if (at == nil or not connections[at]) then
      
      return nil
    end
    
    local old_pos = pos
    for _, c in ipairs(connections[at]) do
      local try = { x = pos.x + c.x, y = pos.y + c.y }
      print('  Try' .. '(' .. try.x .. ' ' .. try.y .. ')')
      if (not equals(path[#path], try)) then
        print('  Moving..')
        table.insert(path, pos)
        pos = try
        at = input[pos.y][pos.x]
        break
      else
        print('  Already been there..')
      end
    end
    
    if (equals(old_pos, pos)) then 
      print('  Could not move anywhere')
      return nil
    end
  until (at == tile_start)
  
  print('Found loop!')
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
    print('From start try ' .. delta.x .. ' ' .. delta.y) 
    local try = { x=pos.x + delta.x, y=pos.y + delta.y }
    for _, c in ipairs(connections[input[try.y][try.x]] or {}) do
      print("  " .. c.x .. ' ' .. c.y) 
      if (c.x == -delta.x and c.y == -delta.y) then
        print("  Does connect to start..") 
        local loop = follow(input, try, { pos })
        if (loop) then return loop end
        break
      else
        print("  Does not connect to start..") 
      end
    end
  end
end

local input = {
"7-F7-",
".FJ|7",
"SJLL7",
"|F--J",
"LJ.LJ",
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

local o_print = print
print = function() end
local result = #find_loop(input, start) / 2
print = o_print
print(result)
