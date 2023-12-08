#include <array>

constexpr int GetScore(int held, int max)
{
    if (held <= 0 || held >= max) { return 0; }
    const auto v = held;
    return (max - held) * v;
};

constexpr int WaysToWin(int duration, int record)
{
    int ways = 0;
    for (int i = 1; i < duration; ++i)
    {
        ways += (GetScore(i, duration) > record);
    }
    return ways;
}

template <size_t S>
constexpr int DoRaces(std::array<int, S> durations, std::array<int, S> records)
{
    int score = 1;
    for (int i = 0; i < durations.size(); ++i)
    {
        score *= WaysToWin(durations[i], records[i]);
    }
    return score;
}

constexpr auto result = DoRaces(
    std::array{ 7, 15, 30 },
    std::array{ 9, 40, 200 }
);

int main()
{
    return result;
}
