# ISP-Calculator

This is a calculator for calculating Input Space Partitioning combination for Software Testing. After finding all inputs, parameters, and characteristics. Tester should partition characteristics into blocks, and design tests by combining blocks from different characteristics
- 3 characteristics: A, B, C
- Three blocks each: A = a1, a2, a3; B = b1, b2, b3; C = c1, c2, c3

The calculator provides 3 critiria for ISP: All Combinations (ACoC), Each Choice Coverage(ECC), and Base Choice Coverage(BCC). 

*All Combinations (ACoC)* : All combinations of blocks from all characteristics must be used.

*Each Choice Coverage(ECC)* : One value from each block for each characteristic must be used in at least one test case.

*Base Choice Coverage(BCC)* : A base choice block is chosen for each characteristic, and a base test is formed by using the base choice for each characteristic. Subsequent tests are chosen by holding all but one base choice constant and using each non-base choice in each other characteristic.
