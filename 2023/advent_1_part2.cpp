#include <array>
#include <string_view>
#include <iostream>

constexpr int ValueOf(std::string_view v)
{
	if (v.find("zero") == 0) { return 0; }
	if (v.find("one") == 0) { return 1; }
	if (v.find("two") == 0) { return 2; }
	if (v.find("three") == 0) { return 3; }
	if (v.find("four") == 0) { return 4; }
	if (v.find("five") == 0) { return 5; }
	if (v.find("six") == 0) { return 6; }
	if (v.find("seven") == 0) { return 7; }
	if (v.find("eight") == 0) { return 8; }
	if (v.find("nine") == 0) { return 9; }

	return -1;
}

constexpr bool IsDigit(char c)
{
	return c >= '0' && c <= '9';
}

constexpr int GetNumber(std::string_view v)
{
	int digit1 = 0;
	for (int i = 0; i < v.size(); ++i)
	{
		if (IsDigit(v[i]))
		{
			digit1 = v[i] - '0';
			break;
		}
		if (auto valueOf = ValueOf(v.substr(i)); valueOf >= 0)
		{
			digit1 = valueOf;
			break;
		}
	}

	int digit2 = 0;
	for (int i = v.size() - 1; i >= 0; --i)
	{
		if (IsDigit(v[i]))
		{
			digit2 = v[i] - '0';
			break;
		}
		if (auto valueOf = ValueOf(v.substr(i)); valueOf >= 0)
		{
			digit2 = valueOf;
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

constexpr auto input = std::array{
	"two1nine",
	"eightwothree",
	"abcone2threexyz",
	"xtwone3four",
	"4nineeightseven2",
	"zoneight234",
	"7pqrstsixteen"
};

int main()
{
	std::cout << CalculateScore(input);
	return 0;
}
