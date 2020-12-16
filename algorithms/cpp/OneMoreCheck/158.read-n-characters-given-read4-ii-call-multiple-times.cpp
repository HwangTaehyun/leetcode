/**
 * The read4 API is defined in the parent class Reader4.
 *     int read4(char *buf);
 */

class Solution {
 private:
  int bufSize = 0;
  int offset = 0;
  char[] temp = new char[4];

 public:
  /**
   * @param buf Destination buffer
   * @param n   Number of characters to read
   * @return    The number of actual characters read
   */
  int read(char *buf, int n) {
    int totalRead = 0;
    bool eof = false;

    while (!eof) {
      if (bufSize == 0) {
        bufSize = read4(buf);
        eof = (bufSize < 4);
      }

      int count = read4(temp);

      eof = (count < 4);

      int actualCount = min(count, n - totalRead);

      for (int i = 0; i < actualCount; i++) {
        buf[totalRead++] = temp[offset + i];
      }

      offset = (offset + actualCount) % 4;
      bufSize = bufSize - actualCount;
    }

    return totalRead;
  }
};
