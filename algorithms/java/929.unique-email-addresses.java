class Solution {
    public int numUniqueEmails(String[] emails) {
        if (emails.length == 0) {
            return 0;
        }

        Map<String, String> hashmap = new HashMap<>();

        for (String email : emails) {
            int loc = email.indexOf("@");
            int plusLoc = email.indexOf("+");
            StringBuffer s1 = new StringBuffer();
            StringBuffer s2 = new StringBuffer();

            if (plusLoc == -1) {
                s1.append(email.substring(0, loc));
            } else {
                s1.append(email.substring(0, plusLoc));
            }
            s2.append(email.substring(loc + 1));

            while (true) {
                int index = s1.indexOf(".");
                if (index == -1)
                    break;
                s1.deleteCharAt(index);
            }

            hashmap.put(s1 + "@" + s2, email);
        }
        return hashmap.size();
    }
}
