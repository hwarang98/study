# 파이썬 문자열
food = "python's favorite food is perl"
print(food)

multiLine = '''
Life is too short
you need python
'''
print(multiLine)

# 문자열 연산
head = 'hello '
tail = 'world!'
print(head + tail)

# multiString.py
print("=" * 50)
print("My Program")
print("=" * 50)

# string.length
a = "Life is too short"
print(len(a))

# string indexing
print(a[1])
b = "Life is too short, you need to python"
print(b[0:4])
print(b[:])

dataAndWeather = '20220227sunny'
data = dataAndWeather[:8] # 8 번째 까지 슬라이싱
weather = dataAndWeather[8:] # 8 번째 부터 끝까지 슬라이싱
print('data: ', data)
print('weather: ', weather)