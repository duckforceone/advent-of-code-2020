def getPreambleNumbers(input, startIndex = 0, preambleLength=25):
    preamble = []
    for i in range(startIndex, startIndex + preambleLength):
        preamble.append(input[i])
    return preamble

def TwoSum(nums, sum):
    for i in range(0, len(nums) - 1):
        for j in range(i, len(nums)):
            if nums[i] + nums[j] == sum:
                return True
    return False

def findFirstNonvalidNumber(nums, preambleLength=25):
    for i in range(0, len(nums)-preambleLength-1):
        preamble = getPreambleNumbers(nums, i, preambleLength)
        targetNum = nums[i+preambleLength]
        if not TwoSum(preamble, targetNum):
            return targetNum

def findContiguousSet(nums, targetNum):
    for i in range(0, len(nums)-1):
        for j in range(i, len(nums)):
            if sum(nums[k] for k in range(i, j)) == targetNum:
                return nums[i:j]

test_input = "../test-input/day9_input.txt"
input = "input.txt"
sequence = []
with open(input, 'r') as file:
    for line in file.readlines():
        sequence.append(int(line.strip()))

# Part 1
preambleLength = 25
firstNonvalidNumber = findFirstNonvalidNumber(sequence, preambleLength)
print("FIRST NON-VALID NUMBER\t\t", firstNonvalidNumber)

# Part 2
contiguousSet = findContiguousSet(sequence, firstNonvalidNumber)
print("SUM of (MAX + MIN) FROM CONTIGUOUS SET\t\t", max(contiguousSet)+min(contiguousSet))