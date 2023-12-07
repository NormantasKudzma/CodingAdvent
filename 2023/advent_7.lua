local dump
dump = function(o)
   if type(o) == 'table' then
      local s = '{ '
      for k,v in pairs(o) do
         if type(k) ~= 'number' then k = '"'..k..'"' end
         s = s .. '['..k..'] = ' .. dump(v) .. ','
      end
      return s .. '} '
   else
      return tostring(o)
   end
end

local to_chars = function(str)
    local chars = {}
    for i = 1, #str do
       table.insert(chars, str:sub(i,i))
    end
    return chars
end

local to_array = function(t) 
    local array = {}
    for k, v in pairs(t) do
        table.insert(array, {k ,v})
    end

    return array
end

local array_map = function(array, callback)
    for i, v in ipairs(array) do
        callback(v, i, array)
    end
end

local hand_type = function(hand)
    local card_counts = {}
    for _, c in ipairs(hand) do
        card_counts[c] = (card_counts[c] or 0) + 1
    end

    card_counts = to_array(card_counts)
    array_map(card_counts, function(v, i, array)
        array[i] = v[2]
    end)
    
    table.sort(card_counts, function(a, b)
        return a > b
    end)

    local most = card_counts[1]
    local second_most = card_counts[2]

    -- Five of kind
    if (most == 5) then return 6
    -- Four of kind
    elseif (most == 4) then return 5
    elseif (most == 3) then
        -- Full house
        if (second_most == 2) then return 4
        -- Three of kind
        else return 3 end
    elseif (most == 2) then
        -- Two pairs
        if (second_most == 2) then return 2
        -- Pair
        else return 1 end
    end

    -- Not special, lol
    return 0
end

local strength = {
    ['A'] = 14, 
    ['K'] = 13, 
    ['Q'] = 12, 
    ['J'] = 11, 
    ['T'] = 10, 
    ['9'] = 9, 
    ['8'] = 8, 
    ['7'] = 7, 
    ['6'] = 6, 
    ['5'] = 5, 
    ['4'] = 4, 
    ['3'] = 3, 
    ['2'] = 2
}
local compare_cardwise = function(a, b)
    for i = 1, #a do
        if (strength[a[i]] ~= strength[b[i]]) then return strength[a[i]] > strength[b[i]] end
    end
    return false
end

local calulate_winnings = function(input)
    for _, p in ipairs(input) do
        local hand = p[1]
        table.insert(p, to_chars(hand))
        table.insert(p, hand_type(p[3]))
    end
    table.sort(input, function(a, b)
        if (a[4] ~= b[4]) then return (a[4] > b[4]) end
        return compare_cardwise(a[3], b[3])
    end)
    
    local winnings = 0
    for i = 1, #input do
        local p = input[i]
        local bet = p[2]
        local rank = #input - i + 1
        --print(p[1] .. ' ' .. rank)
        winnings = winnings + (rank * bet)
    end
    print('Winnings ' .. winnings)
end

calulate_winnings({
    {'32T3K', 765},
    {'T55J5', 684},
    {'KK677', 28},
    {'KTJJT', 220},
    {'QQQJA', 483}
})
