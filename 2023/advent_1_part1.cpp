#include <array>
#include <string_view>
#include <cctype>

constexpr bool IsDigit(char c)
{
	return c >= '0' && c <= '9';
}

constexpr int GetNumber(std::string_view v)
{
	int digit1 = 0;
	for (auto& c : v)
	{
		if (IsDigit(c))
		{
			digit1 = c - '0';
			break;
		}
	}

	int digit2 = 0;
	for (auto it = v.rbegin(); it != v.rend(); ++it)
	{
		const auto c = *it;
		if (IsDigit(c))
		{
			digit2 = c - '0';
			break;
		}
	}

	return digit1 * 10 + digit2;
}

template <size_t S>
constexpr int CalculateScore(std::array<const char*, S> input)
{
	int sum = 0;
	for (auto& line : input)
	{
		sum += GetNumber(line);
	}

	return sum;
}

constexpr auto result = CalculateScore(std::array{
	"1abc2",
	"pqr3stu8vwx",
	"a1b2c3d4e5f",
	"treb7uchet"
});
