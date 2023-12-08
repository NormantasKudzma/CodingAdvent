#include <iostream>
using u64 = unsigned long long;

constexpr u64 GetScore(u64 held, u64 max)
{
    if (held <= 0 || held >= max) { return 0; }
    const auto v = held;
    return (max - held) * v;
};

constexpr u64 WaysToWin(u64 duration, u64 record)
{
    u64 ways = 0;
    for (u64 i = 1; i < duration; ++i)
    {
        ways += (GetScore(i, duration) > record);
    }
    return ways;
}

int main()
{
    std::cout << WaysToWin(71530ull, 940200ull);
    return 0;
}
