# TEST_GetStartedExercise_Triangles
I. Design of test cases

_Make a set of test cases(i.e. specific sets of data) that will adequately test this program:_

_The program reads three integer values from an input dialog. The three values represent the lengths of the sides of a triangle. The program displays a message that states whether the triagle is scalene (no equal sides), isosceles (two sides are equal), or equilateral (all sides are equal)._

:white_check_mark: Step 1: Design test cases (on paper) for both successful and unsuccessful scenarios.

| TEST CASE|       INPUT      |          EXPECTED        |          ACTUAL          |
|----------|------------------|--------------------------|--------------------------|
|    1     |      1,2,3       |          scalene         |          scalene         |
|    2     |      3,2,3       |          isosceles       |         isosceles        |
|    3     |      3,3,3       |          equilateral     |        equilateral       |
|    4     |   1,2,"hello"    |          invalid         |       invalid : NaN      |
|    5     |       1,2        |          invalid         |   invalid : undefined    |
|    6     |       1,0,2      |          invalid         | invalid : side length 0  |

:white_check_mark: Step 2: Design and implement the Triangle program in a programming language (e.g. Java or C#)
  - you don't have to write unit tests, but you may do so :)
  - No need for a nice GUI, just console app is fine
  
 :white_check_mark: Bring the code next time
 
 :white_check_mark: Have an IDE installed on your computer
 
 :white_check_mark: REad Black chap. 3
