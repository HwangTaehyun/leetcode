/* "taehyun" */
#include <algorithm>
#include <functional>
#include <iostream>
#include <set>
#include <string>
#include <unordered_map>

using namespace std;

class Solution {
 private:
 public:
  int lengthOfLongestSubstringTwoDistinct(string s) {
    unordered_map<char, int> hashmap = {};

    int n = s.length();
    int left = 0;
    int right = 0;
    int max_len = 2;

    if (n < 3) {
      return n;
    }

    while (right < n) {
      if (hashmap.size() < 3) {
        hashmap[s[right++]]++;
      }
      // hash map size가 3이상일 때, left pointer를 한칸씩 오른쪽으로
      if (hashmap.size() == 3) {
        hashmap[s[left]]--;

        if (hashmap[s[left]] == 0) {
          hashmap.erase(s[left]);
        }

        left++;
      }

      max_len = max(max_len, right - left);
    }

    return max_len;
  }
};

