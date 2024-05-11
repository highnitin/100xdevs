// pwd
// ls week0
// ls -l
// ls -r
// ls - lt
// ls - lr
// ls - la
// try all these commands in git bash
// ls * .js
// ls -la week2
// ls -R week2
//ls -lR | grep .js
//ls -lR | grep .json
// ls wee* - using wilcard and regex for search
// ls .. - check list of parent
// cat index.js - to view content
// cat > index.js - to add content to the file
// cat >> index.js - to append content to the file
// cntrl + t - to save the content added/appended
// mkdir test && cd test - create and change
// mkdir -p test/folder4
// mv filename1 filename2 - rename file
// mv filename1 folder1/filename2 - move and rename file
// cp folder1/file1 folder2
// cp -r folder1/file1 folder2
// rm filename - remove file
// rm -r folder - remove folder/directory
// chmod u-x filename - change read, write execut (ugo - user, group or organisation)
// chmod g-x filename - change read, write execut (ugo - user, group or organisation)
// chmod o-x filename - change read, write execut (ugo - user, group or organisation)
// chmod -R u-x foldername - change read, write execut (ugo - user, group or organisation)
// echo "Hello Developer"
// echo $PATH
// head viewfile.txt - shows first 10 rows of a file
// tail viewfile.txt - shows last 10 rows of a file
// head -20 viewfile.txt - shows first 20 rows of a file
// tail -n +24 a.txt | head -n +5 : view only certain section of a file from line 24 till next 5 lines
// wc tempo.js - gives no of line, no of words, no of characters
// grep "ls" 2.4_bash.js - how many times ls is used in the file 2.4_bash.js
// grep "ls" 2.4_bash.js | wc
// grep "ls" 2.4_bash.js | wc -l : occurence of ls
// grep -c  "ls" 2.4_bash.js - count of occurence
// grep -h  "ls" 2.4_bash.js - returns the matched line of occurence
// grep -hi  "ls" 2.4_bash.js - returns the matched line of occurence and ignore the exact typecase. exampel ls and LS will be returned
// grep -hir 'ls' - returns all the occurences of ls withing the directory including the path.
// grep -hin  "ls" 2.4_bash.js - returns the matched line of occurence with the line number
// grep -o "ls" 2.4_bash.js - only ls will be returned
// grep -w "ls" 2.4_bash.js - the complete line where ls is present will be returned
// history - to check the history
//
//
//

// history while practicing
//  1  ls
//     2  clear
//     3  cls
//     4  ls
//     5  git
//     6  npm
//     7  lspci | grep -i VGA
//     8  ls
//     9  d:/
//    10  cd d
//    11  dir
//    12  cd ../
//    13  ls
//    14  dir
//    15  cd ../
//    16  ls
//    17  cd ../
//    18  ls
//    19  cd ..
//    20  ls
//    21  cd ../
//    22  ls
//    23  cd D:/
//    24  ls
//    25  ls
//    26  cd
//    27  ls
//    28  cd
//    29  ls
//    30  cd
//    31  clear
//    32  ls -l
//    33  ls -lt
//    34  ls -la
//    35  cd ../
//    36  ls
//    37  ls -la week1
//    38  ls -lt week1
//    39  ls -lt week2
//    40  ls -la week2
//    41  ls -R week2
//    42  ls -la week2
//    43  ls -lt week1
//    44  ls -lt week0
//    45  clea
//    46  clear
//    47  ls -l | grep.json
//    48  ls -l | grep .json
//    49  ls -l | grep .js
//    50  ls | grep .js
//    51  ls -lR | grep .js
//    52  ls -a | grep .js
//    53  ls -la | grep .js
//    54  ls -lt | grep .js
//    55  clear
//    56  ls -l
//    57  ls we*
//    58  ls curiou*
//    59  ls -l curious*
//    60  ls -l curious*.txt
//    61  ls curious*.txt
//    62  clear
//    63  ls -lR | grep .txt
//    64  ls -lR | grep curi*.txt
//    65  ls | grep curi*.txt
//    66  pwd
//    67  ls ..
//    68  ls ../
//    69  ls -l
//    70  clear
//    71  ls -l
//    72  cat week
//    73  cat week0
//    74  cat week0/assignment
//    75  c;ear
//    76  clear
//    77  cat week0/assignment.txt
//    78  cd week2
//    79  ls
//    80  touch temp.js
//    81  ls
//    82  cat > temp.js
//    83  clear
//    84  cat temp.js
//    85  cat > temp.js
//    86  cat > temp.js
//    87  clear
//    88  cat temp.js
//    89  ks
//    90  ls
//    91  cat > temp.js
//    92  clear
//    93  cat temp.js
//    94  cat > temp.js
//    95  ls
//    96  cat temp.js
//    97  cat >> temp.js
//    98  cat temp.js
//    99  clear
//   100  ls
//   101  mv temp.js tempo.js
//   102  ls
//   103  ls -l
//   104  ls
//   105  clear
//   106  ls -l
//   107  chmod +x tempo.js
//   108  ls -l
//   109  chmod +w tempo.js
//   110  ls -l
//   111  chmod u+w tempo.js
//   112  ls -l
//   113  chmod u+x tempo.js
//   114  ls -l
//   115  chmod g+x tempo.js
//   116  ls -l
//   117  chmod o+x tempo.js
//   118  ls -l
//   119  chmod u +x tempo.js
//   120  chmod --help
//   121  chmod -R u +x tempo.js
//   122  chmod -R u+x tempo.js
//   123  ls -l
//   124  chmod -R u-x http_server/
//   125  ls -l
//   126  chmod u +wx tempo.js
//   127  chmod u+wx tempo.js
//   128  ls -l
//   129  chmod u-wx tempo.js
//   130  ls -l
//   131  chmod u+wx tempo.js
//   132  ls -l
//   133  chmod 777 tempo.js
//   134  ls -l
//   135  ls -l
//   136  echo
//   137  clear
//   138  echo $Path
//   139  echo $PATH
//   140  clear
//   141  ;s
//   142  ls
//   143  cat 2.4_bash.js
//   144  tail -n +25 2.4_bash.js | header -n 5
//   145  tail -n +25 2.4_bash.js | header -n 5 2.4_bash.js
//   146  tail -n +25 2.4_bash.js | head -n 5 2.4_bash.js
//   147  tail -n +25 2.4_bash.js | head 5 2.4_bash.js
//   148  tail -n +25 2.4_bash.js | head -n +5 2.4_bash.js
//   149  tail -n +25 2.4_bash.js | head
//   150  tail -n +25 2.4_bash.js | head n +5
//   151  tail -n +25 2.4_bash.js | head -n +5
//   152  tail -n +25 2.4_bash.js | head -n +6
//   153  wc tempo.js
//   154  wc 2.4_bash.js
//   155  grep "ls" 2.4_bash.js
//   156  grep "ls" 2.4_bash.js | wc
//   157  grep "ls" 2.4_bash.js | wc
//   158  grep "ls" 2.4_bash.js
//   159  grep "ls" 2.4_bash.js | wc
//   160  grep "ls" 2.4_bash.js | wc -l
//   161  grep -c  "ls" 2.4_bash.js
//   162  grep -h "ls" 2.4_bash.js
//   163  grep -hu "ls" 2.4_bash.js
//   164  grep -hi "ls" 2.4_bash.js
//   165  grep -ci "ls" 2.4_bash.js
//   166  grep -hir "ls"
//   167  clear
//   168  grep -hir "js"
//   169  grep -hir "console.log"
//   170  clea
//   171  clear
//   172  grep -hir "console.log"
//   173  grep -hin "ls" 2.4_bash.js
//   174  grep -hinw "ls" 2.4_bash.js
//   175  grep -hinw "hello"
//   176  grep -o "ls" 2.4_bash.js
//   177  grep -w "ls" 2.4_bash.js
//   178  grep -o "ls" 2.4_bash.js
//   179  history
