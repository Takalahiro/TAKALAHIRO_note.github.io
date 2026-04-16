# Python学习笔记

## Chapter 1：Data type & Operators

---

## 1 , Data Types 数据类型

| 类型名称 | 英文名  | 示例值                             | 说明                       |
| -------- | ------- | ---------------------------------- | -------------------------- |
| 整数     | `int`   | `1, 0, -5, 2024`                   | 不带小数点的数             |
| 浮点数   | `float` | `3.14, -2.0, 0.5`                  | 带有小数点的数             |
| 字符串   | `str`   | `"hello"`, `'Python'`, `"123"`     | 一串文字或符号，用引号包围 |
| 布尔值   | `bool`  | `True`, `False`                    | 逻辑真假，用于条件判断     |
| 列表     | `list`  | `[1, 2, 3]`, `["a", "b", "c"]`     | 有序、可修改的一组数据     |
| 元组     | `tuple` | `(1, 2, 3)`                        | 有序、不可修改的数据集合   |
| 集合     | `set`   | `{1, 2, 3}`, `{"apple", "banana"}` | 无序、元素不重复           |
| 字典     | `dict`  | `{"name":"Tom", "age":18}`         | 键值对形式的数据结构       |

---

##  2 , 查看数据类型

在 Python 中，可以使用 `type()` 来查看变量的类型：

```python
a = 10
b = 3.14
c = "Python"
d = [1, 2, 3]

print(type(a))  # <class 'int'>
print(type(b))  # <class 'float'>
print(type(c))  # <class 'str'>
print(type(d))  # <class 'list'>
```

---

##  3 ，Type Casting 类型转换


```python
x = 3.14
y = int(x)       # 转成整数，结果=3
z = str(x)       # 转成字符串，结果='3.14'
p = float("5")   # 转成浮点数，结果=5.0
```

常见转换函数：
- `int(x)` → 转整数  
- `float(x)` → 转浮点数  
- `str(x)` → 转字符串  
- `list(x)` → 转列表（可迭代对象）  
- `bool(x)` → 转真假值  

---

## 4 ， Operators 符号运算

Python 的符号（运算符）主要分为几类：

### 1 ， 数值运算符

| 运算符 | 含义       | 示例     | 结果                 |
| ------ | ---------- | -------- | -------------------- |
| `+`    | 加         | `3 + 2`  | `5`                  |
| `-`    | 减         | `6 - 4`  | `2`                  |
| `*`    | 乘         | `3 * 4`  | `12`                 |
| `/`    | 除         | `8 / 2`  | `4.0` (结果是浮点数) |
| `//`   | 整除       | `7 // 2` | `3`                  |
| `%`    | 取余       | `7 % 2`  | `1`                  |
| `**`   | 幂（次方） | `2 ** 3` | `8`                  |

示例：
```python
a = 7
b = 2
print(a + b)   # 9
print(a - b)   # 5
print(a * b)   # 14
print(a / b)   # 3.5
print(a // b)  # 3
print(a % b)   # 1
print(a ** b)  # 49
```

---

###  2 ， 比较运算符（返回 True 或 False）

| 运算符 | 含义     | 示例     | 结果  |
| ------ | -------- | -------- | ----- |
| `==`   | 相等     | `3 == 3` | True  |
| `!=`   | 不等     | `3 != 4` | True  |
| `>`    | 大于     | `5 > 3`  | True  |
| `<`    | 小于     | `2 < 1`  | False |
| `>=`   | 大于等于 | `5 >= 5` | True  |
| `<=`   | 小于等于 | `4 <= 5` | True  |

---

###  3 ， 逻辑运算符（Boolean Logic）

| 运算符 | 含义             | 示例             | 结果  |
| ------ | ---------------- | ---------------- | ----- |
| `and`  | 与（两个都真）   | `True and False` | False |
| `or`   | 或（任意真则真） | `True or False`  | True  |
| `not`  | 非（取反）       | `not True`       | False |

示例：
```python
x = 5
print(x > 3 and x < 10)  # True
print(x < 3 or x == 5)   # True
print(not(x == 5))       # False
```

---

###  4 ， 赋值运算符

| 运算符 | 含义       | 示例                   |
| ------ | ---------- | ---------------------- |
| `=`    | 赋值       | `x = 3`                |
| `+=`   | 增加并赋值 | `x += 2` → `x = x + 2` |
| `-=`   | 减少并赋值 | `x -= 2`               |
| `*=`   | 乘并赋值   | `x *= 2`               |
| `/=`   | 除并赋值   | `x /= 2`               |

---

### 5 ， 成员与身份运算符

| 运算符   | 含义                                 | 示例                        |
| -------- | ------------------------------------ | --------------------------- |
| `in`     | 判断元素是否在序列中                 | `"a" in "apple"` → True     |
| `not in` | 判断元素是否不在序列中               | `"b" not in "apple"` → True |
| `is`     | 判断两个对象是否是同一个（内存地址） | `x is y`                    |
| `is not` | 判断两个对象是否不是同一个           | `x is not y`                |

---


# Chapter 2 ：**Functions**

---

## 1 , 函数的概念

**函数（Function）** 是一段可以被“重复执行”的代码，它用来实现某个具体功能。  

- 可以减少代码重复  
- 让程序更结构化  
- 更易维护与理解  

---

## 2 , 定义函数

在 Python 里使用关键字 `def` 来定义函数。  

```python
def 函数名(参数1, 参数2, ...):
    函数体语句
    return 返回值
```

### 示例：

```python
def greet(name):
    print("Hello,", name)
```

调用：
```python
greet("Alice")   # 输出：Hello, Alice
greet("Bob")     # 输出：Hello, Bob
```


---

## 3 , 函数的调用与执行顺序

定义只是建立函数；只有**调用**时才会执行：

```python
def hello():
    print("Hello Python!")

# 调用
hello()     # 输出：Hello Python!
```

---

## 4 , 参数（Parameters）与实参（Arguments）

### 形参（定义时的占位符）
```python
def add(a, b):   # a, b 是形参
    print(a + b)
```

### 实参（调用时传入的值）
```python
add(5, 3)   # 实参是 5 和 3
```

输出：
```
8
```

---

###  带默认值的参数

你可以给参数一个默认值，当调用时没有传该值，就用默认值。

```python
def power(base, exponent=2):
    return base ** exponent

print(power(3))      # 默认平方 → 9
print(power(3, 3))   # 3 的三次方 → 27
```

---

### 关键字参数（Keyword arguments）

可以指定参数名进行调用：

```python
def student(name, age, major):
    print(f"{name} 的年龄是 {age}，专业是 {major}")

student(age=20, name="小明", major="计算机")
```

---

### 可变参数

有时你不确定要传多少个参数——可以用 `*args` 或 `**kwargs`。

```python
def show_numbers(*args):
    for n in args:
        print(n)

show_numbers(1, 2, 3, 4)   # *args 收到多个数字
```

`*args` 代表一个“元组形式”的参数集合。  
`**kwargs` 可以接收多个“键=值”的关键字参数。

```python
def show_info(**kwargs):
    for key, value in kwargs.items():
        print(key, "=", value)

show_info(name="Tom", age=18, country="China")
```

输出：
```
name = Tom  
age = 18  
country = China
```

---

## 5 , 返回值（Return）

如果函数需要给调用者一个结果，用 `return` 返回。

```python
def add(a, b):
    return a + b

s = add(3, 5)
print(s)   # 输出 8
```

> `return` 语句一旦执行，函数立即结束。

如果没有写 `return`，默认返回 `None`。

```python
def say_hello():
    print("Hi!")

x = say_hello()
print(x)   # 输出 None
```

---

## 6 , 局部变量与全局变量

### 局部变量（local variable）

在函数里定义，只能在函数内部使用。

```python
def test():
    x = 10
    print(x)

test()
# print(x)  #  报错：NameError，x只能在函数内访问
```

### 全局变量（global variable）
定义在函数外部，可以在整个程序中使用。

```python
y = 20

def show():
    print(y)

show()  #  可以访问全局变量
```

要在函数里修改全局变量，需使用关键字 `global`：

```python
counter = 0

def add():
    global counter
    counter += 1

add()
add()
print(counter)  # 输出 2
```

---

## 7 , 匿名函数（Lambda表达式）(非必要)

有时你只需要一个简短的函数，可以用 **lambda** 定义：

```python
square = lambda x: x * x
print(square(5))  # 输出 25
```

等价于：
```python
def square(x):
    return x * x
```

>  lambda 函数只能写一行表达式，没有 `return`。

---

## 8 , 函数嵌套与作用域示例 (非必要)

函数可以定义在函数内部（称为**嵌套函数**）：

```python
def outer():
    def inner():
        print("This is inner function")
    inner()  # 调用内部函数

outer()  # 输出：This is inner function
```

---

## 9 , 文档字符串（函数说明）(非必要)

在函数定义下写一段三引号的字符串，可以用来描述函数作用：

```python
def greet(name):
    """这个函数用于打招呼，传入名字即可输出问候"""
    print("Hello,", name)

print(greet.__doc__)  # 查看文档字符串
```

---

##  10 , 总结表

| 关键内容 | 说明                 | 示例              |
| -------- | -------------------- | ----------------- |
| 函数定义 | 用 `def` 声明        | `def func():`     |
| 调用函数 | 写函数名 + 括号      | `func()`          |
| 参数     | 传入值、可设默认值   | `def add(a, b=1)` |
| 返回值   | 用 `return` 返回结果 | `return x + y`    |
| 局部变量 | 函数内部有效         | `x = 10`          |
| 全局变量 | 整个程序有效         | `global x`        |
| 匿名函数 | 用 `lambda` 定义     | `lambda x: x**2`  |

---





# **Chapter 3：Built‑in Data Types **

---

### Overview 概述

Python 中的数据结构是学习编程的基础，它们决定了数据如何存储、组织与操作。  
In this chapter, you will learn all common built‑in data types in Python:  

| 数据类型 Name | English 名称 | Typical Use 常见场景                  |
| ------------- | ------------ | ------------------------------------- |
| `str`         | String       | 文字、文本                            |
| `list`        | List         | 有序可修改的序列                      |
| `tuple`       | Tuple        | 有序不可修改的序列                    |
| `dict`        | Dictionary   | 键值映射结构                          |
| `set`         | Set          | 无序不重复元素集合                    |
| `array`       | Array        | 同类型数值数组（与数学/科学计算有关） |

---

##  **1. String（字符串）**

| 特点 Feature | 英文说明 | 中文说明                         |
| ------------ | -------- | -------------------------------- |
| 类型名称     | `str`    | 用引号 `' '` 或 `" "` 表示的文本 |
| 是否可修改   | 不可修改 | 值不能被直接改变                 |
| 是否有序     | 有序     | 可以按索引访问                   |

###  示例 Example

```python
text = "Python"
print(text[0])      # P
print(text[-1])     # n
print(text[1:4])    # yth
```

###  常用操作

| 操作名称   | 示例代码                            | 结果              |
| ---------- | ----------------------------------- | ----------------- |
| 字符串拼接 | `"Py" + "thon"`                     | `'Python'`        |
| 重复       | `"Hi " * 3`                         | `'Hi Hi Hi '`     |
| 查找       | `"hello".find("l")`                 | `2`               |
| 替换       | `"I like C".replace("C", "Python")` | `'I like Python'` |
| 分割       | `"a,b,c".split(",")`                | `['a','b','c']`   |
| 计数       | `"banana".count("a")`               | `3`               |
| 去空格     | `"  hi  ".strip()`                  | `'hi'`            |

---

##  **2. List（列表）**

| 特点       | English | 中文说明               |
| ---------- | ------- | ---------------------- |
| 类型名称   | `list`  | [] 中放多个元素        |
| 是否可修改 | 可修改  | 支持增删改             |
| 是否有序   | 有序    | 元素有索引，按顺序排列 |

###  示例 Example

```python
nums = [10, 20, 30]
print(nums[0])     # 10
print(nums[-1])    # 30
```

###  常用方法 Methods

| 方法名          | 功能说明         | 示例                |
| --------------- | ---------------- | ------------------- |
| `.append(x)`    | 末尾添加一个元素 | `nums.append(40)`   |
| `.insert(i, x)` | 在指定位置插入   | `nums.insert(1,15)` |
| `.pop(i)`       | 删除并返回元素   | `nums.pop(0)`       |
| `.remove(x)`    | 删除指定元素     | `nums.remove(20)`   |
| `.sort()`       | 升序排列         | `nums.sort()`       |
| `.reverse()`    | 倒序排列         | `nums.reverse()`    |

###  列表切片与循环

```python
colors = ["red", "green", "blue", "yellow"]
print(colors[1:3])       # ['green', 'blue']

for color in colors:
    print(color)
```

---

##  **3. Tuple（元组）**

| 特点       | English  | 中文说明           |
| ---------- | -------- | ------------------ |
| 类型名称   | `tuple`  | ()括起来的一组元素 |
| 是否可修改 | 不可修改 | 创建后不能增删改   |
| 是否有序   | 有序     | 可以按索引访问     |

###  示例 Example

```python
point = (10, 20)
print(point[0])  # 10
```

###  使用场景

- 固定数据集合：如坐标 `(x, y)`
- 比列表更安全，避免被意外修改
- 可以作为字典的键（因为不可变）

---

##  **4. Dictionary（字典）**

| 特点       | English                              | 中文说明        |
| ---------- | ------------------------------------ | --------------- |
| 类型名称   | `dict`                               | `{键: 值}` 组成 |
| 是否可修改 | 可修改                               |                 |
| 是否有序   | 从 Python 3.7 起有序（保持插入顺序） |                 |
| 访问方式   | 用 KEY 找 VALUE                      |                 |

###  示例 Example

```python
student = {"name": "Alice", "age": 20, "major": "CS"}
print(student["name"])     # Alice
```

###  常用方法 Methods

| 方法名               | 功能                 | 示例                            |
| -------------------- | -------------------- | ------------------------------- |
| `.keys()`            | 获取所有键           | `student.keys()`                |
| `.values()`          | 获取所有值           | `student.values()`              |
| `.items()`           | 获取键值对           | `student.items()`               |
| `.get(key, default)` | 读值，自动提供默认值 | `student.get("grade", "N/A")`   |
| `.pop(key)`          | 删除键               | `student.pop("age")`            |
| `.update({...})`     | 更新或增加键值       | `student.update({"grade":"A"})` |

###  遍历 Dictionary

```python
for k, v in student.items():
    print(k, "->", v)
```

输出：
```
name -> Alice
age -> 20
major -> CS
```

---

##  **5. Set（集合）**

| 特点         | English          | 中文说明    |
| ------------ | ---------------- | ----------- |
| 类型名称     | `set`            | `{a, b, c}` |
| 是否可修改   | 可修改           |             |
| 是否有序     | 无序             |             |
| 是否允许重复 | 不允许有重复元素 |             |

###  示例 Example

```python
nums = {1, 2, 3, 3, 2}
print(nums)     # 输出 {1, 2, 3}
```

###  集合操作 Set Operations

| 操作       | 示例                | 结果          |
| ---------- | ------------------- | ------------- |
| 并集 `|`   | `{1,2,3} | {3,4,5}` | `{1,2,3,4,5}` |
| 交集 `&`   | `{1,2,3} & {2,3,4}` | `{2,3}`       |
| 差集 `-`   | `{1,2,3} - {2}`     | `{1,3}`       |
| 对称差 `^` | `{1,2} ^ {2,3}`     | `{1,3}`       |

###  常用方法

| 方法名                         | 功能                       |
| ------------------------------ | -------------------------- |
| `.add(x)`                      | 添加元素                   |
| `.remove(x)`                   | 删除元素（如不存在则报错） |
| `.discard(x)`                  | 删除元素（不存在也不报错） |
| `.clear()`                     | 清空集合                   |
| `.union()` / `.intersection()` | 并集 / 交集                |

---

##  **6. Array（数组）**

Python 自带的列表已能实现类似数组功能，但在科学计算中我们通常用 **array 模块** 或 **NumPy**。

###  用 `array` 模块创建

```python
from array import array

nums = array('i', [1, 2, 3, 4])  # 'i' 表示int类型
nums.append(5)
print(nums)   # array('i', [1, 2, 3, 4, 5])
```

| 数组类型代码 | 含义         |
| ------------ | ------------ |
| `'i'`        | 整数 int     |
| `'f'`        | 浮点 float   |
| `'d'`        | 双精度 float |

###  与列表区别

| 项目     | 列表（List） | 数组（Array）      |
| -------- | ------------ | ------------------ |
| 数据类型 | 任意类型混合 | 必须同一类型       |
| 性能     | 较慢         | 较快、更节省内存   |
| 常用场景 | 通用数据集合 | 科学计算、数值运算 |

---

##  **7. 综合对比 Summary Table 比较表**

| 类型    | 英文名     | 可修改 | 有序 | 重复       | 示例                 |
| ------- | ---------- | ------ | ---- | ---------- | -------------------- |
| `str`   | String     | ❌      | ✅    | ✅          | `"Python"`           |
| `list`  | List       | ✅      | ✅    | ✅          | `[1,2,3]`            |
| `tuple` | Tuple      | ❌      | ✅    | ✅          | `(1,2,3)`            |
| `dict`  | Dictionary | ✅      | ✅    | 键不可重复 | `{"a":1,"b":2}`      |
| `set`   | Set        | ✅      | ❌    | ❌          | `{1,2,3}`            |
| `array` | Array      | ✅      | ✅    | ✅          | `array('i',[1,2,3])` |

---

#

# **Chapter 4：`if` Statements **

---

###  Overview 概述

`if` 语句是 **Python 程序的决策结构（decision structure）**。  
它让程序根据条件的真假（True / False）来 **选择不同的执行路径**。  

In simple words:  
> `if` allows your program to **make decisions**.

---

##  1. Basic Syntax

```python
if 条件:                      # condition
    语句块1 (True时执行)
else:
    语句块2 (False时执行)
```

英文结构：
```python
if condition:
    statements_if_true
else:
    statements_if_false
```

注意：  
- **冒号 (:)** 是必须的。  
- **缩进（indentation）** 非常重要！Python 用缩进代替 `{}`。  

---

###  Example 

```python
age = 18
if age >= 18:
    print("You are an adult.")     # 如果条件为真执行
else:
    print("You are not an adult.") # 否则执行
```

输出：
```
You are an adult.
```

---

##  **2. `if–elif–else` 多条件判断**

当你有多种条件时，可以用 `elif`（“else if”的缩写）。

```python
score = 85

if score >= 90:
    print("Excellent")
elif score >= 70:
    print("Good")
elif score >= 60:
    print("Pass")
else:
    print("Fail")
```

输出：
```
Good
```

>  判断顺序从上到下，**第一个成立的条件**会执行，然后整个结构结束。

---

##  **3. 嵌套条件（Nested if）**

```python
x = 10
if x > 0:
    if x < 5:
        print("x is between 0 and 5")
    else:
        print("x is greater than or equal to 5")
```

 嵌套 if 语句用于进行 **多层逻辑判断**。  
However, avoid too deep nesting — prefer logical operators instead!

---

##  **4. Logical Operators 逻辑运算符结合 if**

| 运算符 | 意义 | 示例               | 结果              |
| ------ | ---- | ------------------ | ----------------- |
| `and`  | 并且 | `x > 0 and x < 10` | True 当两个都为真 |
| `or`   | 或者 | `x < 0 or x > 100` | True 其中之一为真 |
| `not`  | 取反 | `not (x > 5)`      | True 如果 x ≤ 5   |

示例：
```python
x = 8
if x > 0 and x < 10:
    print("x is a positive single-digit number")
```

---

##  **5. Comparison Operators 比较运算符**

| 运算符 | 含义     | 示例     | 结果 |
| ------ | -------- | -------- | ---- |
| `==`   | 等于     | `5 == 5` | True |
| `!=`   | 不等于   | `5 != 3` | True |
| `>`    | 大于     | `8 > 6`  | True |
| `<`    | 小于     | `4 < 7`  | True |
| `>=`   | 大于等于 | `6 >= 6` | True |
| `<=`   | 小于等于 | `3 <= 5` | True |

这些运算符可以和 `if` 一起使用。

---

##  **6. One‑line Conditional Expression（条件表达式 / 三元运算）** (非必要)

有时候只想用一行表达 if‑else，可以用 “**三元表达式**”：

```python
a = 5
b = "Positive" if a > 0 else "Non‑positive"
print(b)
```

输出：
```
Positive
```

语法：
```python
变量 = 值1 if 条件 else 值2
```

---

##  **7. Using `in` and `not in` 判断成员关系** 

```python
fruits = ["apple", "banana", "cherry"]

if "apple" in fruits:
    print("Yes, apple is in the list.")
if "mango" not in fruits:
    print("No mango found.")
```

输出：
```
Yes, apple is in the list.
No mango found.
```

---

##  **8. Combining Multiple Conditions 多重组合条件**

```python
x = 12
if (x > 0 and x < 10) or (x == 12):
    print("Condition matched!")
```

输出：
```
Condition matched!
```

---

## **9. Boolean Values 布尔类型与 if** 

在 if 判断中，Python 会自动根据值的“真假”做判断：

| 值             | 判断结果（False） |
| -------------- | ----------------- |
| `0`            | False             |
| `None`         | False             |
| `""` 空字符串  | False             |
| `[]` 空列表    | False             |
| `{}` 空字典    | False             |
| `set()` 空集合 | False             |

除了这些，其它都视为 True。

示例：
```python
if []:
    print("non-empty")   # 不执行
else:
    print("empty")       # 执行
```

输出：
```
empty
```

---

# **Chapter 5：Loops**

---

###  Overview （概述）

**Loop**（循环）让你的程序可以重复执行一段代码。  
In programming, loops allow a block of code to **run multiple times** until a condition is met.

Python 中主要有两种循环：
- `for` 循环 —— 用于遍历序列（列表、字符串、字典等）；
- `while` 循环 —— 用于在某个条件为真时持续执行。  

---

## 1. `for` Loop 

###  Basic Syntax 基本语法

```python
for variable in iterable:
    执行语句
```

英语解释：
```python
for variable in iterable:
    # do something with variable
```

- `iterable` 指可迭代对象（如 list, tuple, str, range, dict）。

- 每次循环都会让 `variable` 依次取遍其中的元素。
###  反向索引
1 用负号索引
  直接用负数访问末尾元素：
```python
PYTHON
print(letters[-1])  # D
print(letters[-2])  # Y
 从右往左数，-1 是最后一个，-2 倒数第二。
```
2 用计算式索引：len(list) − 1 − i 或类似
适合在 for i in range() 循环里倒序访问。

例如：
```python
PYTHON
letters = ['U', 'S', 'Y', 'D']
for i in range(len(letters)):
    print(letters[len(letters) - 1 - i])
```
计算过程：
len(letters) = 4，索引是 3→2→1→0，打印 D Y S U。

---

###  Example 例子

```python
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)
```

输出：
```
apple
banana
cherry
```

 相当于 “从列表中取出每个水果并打印”。

---

###  Using `range()` 与 range 搭配

`range()` 用于生成连续数字序列，非常常用。

```python
for i in range(5):
    print(i)
```

输出：
```
0
1
2
3
4
```
> 默认从 0 开始，直到（不含）5。

---

###  控制起始和步长

```python
for i in range(1, 10, 2):
    print(i)
```

输出：
```
1
3
5
7
9
```

解释：  
`range(起始, 结束, 步长)` → 从 1 到 9，每次加 2。

---

###  Looping through Strings 遍历字符串

```python
for ch in "Python":
    print(ch)
```
输出：
```
P
y
t
h
o
n
```

---

###  Looping through Dictionary 遍历字典

```python
info = {"name": "Alice", "age": 20}

for key, value in info.items():
    print(key, "=", value)
```

输出：
```
name = Alice
age = 20
```

---

##  **2. `while` Loop **

### Basic Syntax 基本语法

```python
while condition:
    执行语句
```

英文结构：
```python
while condition:
    # loop body
```

只要条件为真（True），就会重复执行。

---

###  Example 示例

```python
count = 0
while count < 3:
    print("Hello")
    count += 1
```

输出：
```
Hello
Hello
Hello
```

---

###  无限循环 Infinite Loop

```python
while True:
    print("This loop never ends!")
```

 要小心，当条件永远为 True 时，它会一直执行。  
你可以搭配 `break` 退出：  

```python
x = 0
while True:
    if x == 3:
        break
    print(x)
    x += 1
```

输出：
```
0
1
2
```

---

##  **3. Loop Control Statements ** 

Python 提供三个常见控制命令：  

| 语句       | English Meaning        | 中文说明                 |
| ---------- | ---------------------- | ------------------------ |
| `break`    | Exit the loop          | 立刻结束整个循环         |
| `continue` | Skip current iteration | 跳过本次循环，继续下一次 |
| `pass`     | Do nothing             | 什么也不做（占位）       |

---

###  `break` 示例

```python
for i in range(1, 10):
    if i == 5:
        break
    print(i)
```

输出：
```
1
2
3
4
```

 当 `i == 5` 时终止循环。

---

###  `continue` 示例

```python
for i in range(1, 6):
    if i == 3:
        continue  # 跳过本次
    print(i)
```

输出：
```
1
2
4
5
```

---

###  `pass` 示例

```python
for x in range(4):
    if x == 2:
        pass    # 什么也不做
    print(x)
```

输出：
```
0
1
2
3
```

---

##  **4. Loop + `else` Statement **

Python 有一个特别的语法：循环结束后可执行 `else` 块。  
`else` 会在 **循环没有被 break 打断时执行**。

```python
for i in range(3):
    print(i)
else:
    print("Loop finished normally.")
```

输出：
```
0
1
2
Loop finished normally.
```

但如果中途 `break`，则不会执行：

```python
for i in range(3):
    if i == 1:
        break
else:
    print("Loop finished normally.")
```

输出不会出现 “Loop finished normally.”。

---

##  **5. Nested Loops **

嵌套循环指 “循环中套循环”。

```python
for i in range(1, 4):
    for j in range(1, 3):
        print(i, j)
```

输出：
```
1 1
1 2
2 1
2 2
3 1
3 2
```

---

##  **6. Practical Examples 实际案例**

###  Example 1 — 打印1到10的偶数

```python
for i in range(1, 11):
    if i % 2 == 0:
        print(i)
```

输出：
```
2
4
6
8
10
```

---

###  Example 2 — 求列表元素之和

```python
nums = [10, 20, 30, 40]
total = 0
for n in nums:
    total += n
print("Sum =", total)
```
输出：
```
Sum = 100
```

---

###  Example 3 — 倒计时

```python
count = 5
while count > 0:
    print(count)
    count -= 1
print("Blast Off!")
```

输出：
```
5
4
3
2
1
Blast Off!
```

---

##  **Summary Table — 循环对照表**

| 循环类型   | 英文名称   | 主要用途             | 是否基于条件 | 是否遍历序列 | 示例                  |
| ---------- | ---------- | -------------------- | ------------ | ------------ | --------------------- |
| `for`      | For Loop   | 遍历序列元素         | ❌            | ✅            | `for x in list:`      |
| `while`    | While Loop | 持续执行直到条件为假 | ✅            | ❌            | `while x < 10:`       |
| `break`    | Break      | 提前终止循环         | ✅            | ✅            | `if x==5: break`      |
| `continue` | Continue   | 跳过当前迭代         | ✅            | ✅            | `if x%2==0: continue` |
| `pass`     | Pass       | 占位不做操作         | ❌            | ✅            | `if x==3: pass`       |
| `else`     | Loop‑else  | 循环正常结束时执行   | ✅            | ✅            | `for x in ... else:`  |

---



# **Chapter 6：Exception Handling — try … except **

---

###  Overview （概述）

当程序执行过程中出现错误（Error）时，Python 默认会**停止执行并抛出异常（Exception）**。  
为了防止程序崩溃，我们可以使用 **`try … except`** 语句来**捕获并处理错误**，从而让程序继续运行。

> In short:  
> `try-except` allows a program to **handle errors gracefully**, instead of crashing.

---

##  **1. What is an Exception? 什么是异常？**

| 类型                | 示例                 | 含义             |
| ------------------- | -------------------- | ---------------- |
| `ZeroDivisionError` | `10 / 0`             | 除以零错误       |
| `ValueError`        | `int("abc")`         | 无法转换类型     |
| `NameError`         | 未定义的变量         | 引用不存在的名称 |
| `TypeError`         | `2 + "3"`            | 类型不匹配       |
| `IndexError`        | 超出列表索引         | 访问不存在的元素 |
| `KeyError`          | 访问字典中不存在的键 | 字典键错误       |
| `FileNotFoundError` | 打开不存在的文件     | 文件错误         |

---

##  **2. Basic Syntax 基本语法**

```python
try:
    # 可能出错的代码
except:
    # 当错误发生时执行此处
```

###  Example 示例

```python
try:
    x = 10 / 0
except:
    print("An error occurred!")
```

输出：
```
An error occurred!
```

即使出错，程序不会崩溃，依然能继续执行。

---

##  **3. Catch Specific Exception 捕获特定异常**

有时你只想捕获某一种错误类型，可以像下面这样写：

```python
try:
    num = int("abc")
except ValueError:
    print("Please enter a valid number!")
```

输出：
```
Please enter a valid number!
```

>  好处：更精确控制，不会误拦截其他错误。

---

##  **4. Multiple Excepts 多个异常类型** (非必要)

如果可能出现不同错误，可以设置多个 except 分支：

```python
try:
    a = int(input("Enter number: "))
    b = int(input("Enter divisor: "))
    print(a / b)
except ZeroDivisionError:
    print("❌ Cannot divide by zero.")
except ValueError:
    print("❌ Please enter a valid integer.")
```

示例输入：
```
Enter number: 10
Enter divisor: 0
❌ Cannot divide by zero.
```

---

##  **5. Catch Multiple Errors Together 同时捕获多种错误**(非必要)

你也可以将多个异常写在一个元组里：

```python
try:
    x = int("abc")
except (ValueError, TypeError):
    print("Error: Invalid conversion or type mismatch.")
```

---

##  **6. The else Clause — 与 if 不同的 else 子句**

`else` 可以与 `try-except` 一起使用。  
只有当 **try 中没有发生异常时**，`else` 才会执行。

```python
try:
    num = int(input("Enter number: "))
except ValueError:
    print("Invalid input!")
else:
    print(f"You entered {num}")
```

---

##  **7. The finally Clause — 无论如何都会执行** (非必要)

`finally` 块用于无论是否发生错误都要执行的操作。  
常用于**关闭文件、释放资源或断开连接**。

```python
try:
    file = open("test.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("File not found.")
finally:
    print("This block always runs.")
```

输出：
```
File not found.
This block always runs.
```

---

##  **8. Combine All（完整结构）**

```python
try:
    # 1. 尝试执行
    risky_code()
except ValueError:
    # 2. 捕获特定异常
    print("Value error!")
except Exception as e:
    # 3. 捕获所有其他异常
    print("Other error:", e)
else:
    # 4. 当没有异常时执行
    print("Everything went well!")
finally:
    # 5. 总会执行
    print("Program finished.")
```

---

##  **9. Exception Object（异常对象）**

捕获异常后，可以通过 `as` 获取异常对象，打印错误信息：

```python
try:
    result = 10 / 0
except Exception as e:
    print("Error details:", e)
```

输出：
```
Error details: division by zero
```

---

##  **10. Raising Exceptions 主动抛出异常** 

使用 `raise` 语句，你可以在程序中主动触发错误：

```python
age = -5
if age < 0:
    raise ValueError("Age cannot be negative!")
```

输出：
```
ValueError: Age cannot be negative!
```

---

##  **11. Example — 处理用户输入**

```python
def divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("Cannot divide by zero!")
    else:
        print("Result =", result)
    finally:
        print("Operation complete.")

divide(10, 2)
divide(10, 0)
```

输出：
```
Result = 5.0
Operation complete.
Cannot divide by zero!
Operation complete.
```

---

##  **12. 常见异常类型表**

| 异常名              | 含义         | 示例              |
| ------------------- | ------------ | ----------------- |
| `ZeroDivisionError` | 除数为0      | `10 / 0`          |
| `IndexError`        | 序列索引超界 | `[1,2][5]`        |
| `KeyError`          | 字典键不存在 | `{"a":1}["b"]`    |
| `TypeError`         | 不同类型操作 | `"a" + 1`         |
| `ValueError`        | 转换非法     | `int("abc")`      |
| `NameError`         | 变量未定义   | `print(x)`        |
| `FileNotFoundError` | 文件不存在   | `open("abc.txt")` |

---

##  **Summary Table — 结构总结**

| 关键字              | 英文说明                 | 中文说明               |
| ------------------- | ------------------------ | ---------------------- |
| `try:`              | Try running code         | 尝试执行可能出错的代码 |
| `except:`           | Catch exception          | 当异常发生时执行       |
| `except TypeError:` | Catch specific exception | 捕获特定异常类型       |
| `else:`             | Execute if no exception  | 无错误时执行           |
| `finally:`          | Always execute           | 无论成功或失败都执行   |
| `raise`             | Manually raise exception | 主动抛出异常           |



# Chapter 7：File Handling — 文件读写（open / read / write）

---

###  **Overview —— 概述**

**File Handling** allows Python to store and retrieve data from files on disk.  

> 文件读写使程序可以与外部数据持久交互，例如保存结果、加载配置、记录日志等。  

Python内置了非常方便的操作接口： `open()`, `read()`, `write()`, `close()`, 以及 `with` 语法。

---

##  **1. Opening a File 打开文件**

基本语法：

```python
file = open(filename, mode, encoding)
```

| 参数       | 英文说明                 | 中文说明                   | 示例                        |
| ---------- | ------------------------ | -------------------------- | --------------------------- |
| `filename` | name or path of the file | 文件名或路径               | `"data.txt"`                |
| `mode`     | operation type           | 操作模式                   | `'r'`, `'w'`, `'a'`, `'r+'` |
| `encoding` | character encoding       | 字符编码（对文本文件重要） | `'utf-8'`                   |

---

###  Common Modes 常见模式

| 模式   | 英文名       | 中文说明         | 行为                       |
| ------ | ------------ | ---------------- | -------------------------- |
| `'r'`  | Read         | 读取模式（默认） | 如果文件不存在会报错       |
| `'w'`  | Write        | 写入模式         | 会新建文件并**覆盖旧内容** |
| `'a'`  | Append       | 追加模式         | 向文件末尾追加内容         |
| `'r+'` | Read + Write | 读写模式         | 文件必须存在               |
| `'w+'` | Write + Read | 写入后可读       | 先清空文件                 |
| `'b'`  | Binary       | 二进制模式       | 常用于图片或音频           |
| `'t'`  | Text         | 文本模式（默认） | 普通字符读取               |

---

##  **2. Reading Files 读取文件**

打开后可以用 `.read()`、`.readline()`、`.readlines()` 来读。

###  示例

```python
file = open("example.txt", "r", encoding="utf-8")
content = file.read()
print(content)
file.close()
```

输出（假设文件内容）：
```
Hello Python
File handling is easy.
```

---

###  按行读取（逐行 read line）

```python
file = open("example.txt", "r", encoding="utf-8")

for line in file:
    print(line.strip())

file.close()
```

 `.strip()` 去掉每行末尾的换行符。

---

###  `readline()` 与 `readlines()`

| 方法           | 功能             | 示例                                                 |
| -------------- | ---------------- | ---------------------------------------------------- |
| `.readline()`  | 读取一行         | `print(file.readline())`                             |
| `.readlines()` | 读取所有行到列表 | `lines = file.readlines()` → `['line1', 'line2', …]` |

---

##  **3. Writing Files 写入文件**

写入时通常用 `'w'` 或 `'a'` 模式。

###  `.write()` 示例
```python
file = open("output.txt", "w", encoding="utf-8")
file.write("Hello World!\n")
file.write("This is Python.")
file.close()
```

若文件不存在会自动创建，旧内容会被覆盖。

---

###  `.writelines()` 示例
```python
lines = ["First line\n", "Second line\n", "Third line\n"]
file = open("multi.txt", "w", encoding="utf-8")
file.writelines(lines)
file.close()
```

---

##  **4. Append Files 文件追加**

`'a'` 模式会保留原有内容，并将新内容添加在末尾：

```python
file = open("output.txt", "a", encoding="utf-8")
file.write("\nNew line appended.")
file.close()
```

---

##  **5. Closing Files 关闭文件**

每次打开文件后，务必记得 **关闭**。

```python
file.close()
```

否则可能会造成：
- 内存资源未释放；
- 数据未正确写入磁盘。

---

##  **6. The `with` Statement（推荐）**

用 `with` 可以让文件自动关闭 — 更安全，更简洁。

```python
with open("data.txt", "r", encoding="utf-8") as file:
    content = file.read()
    print(content)
# 文件在此处自动关闭
```

 `with` 会自动调用 `file.close()` 就算中途报错也能安全关闭。

---

##  **7. Writing and Reading Combined 读写结合**

```python
with open("notes.txt", "w+", encoding="utf-8") as f:
    f.write("Learning Python file handling.\n")
    f.seek(0)                # 回到文件开头
    print(f.read())
```

输出：
```
Learning Python file handling.
```

---

##  **8. Handling Binary Files 二进制文件** (非必要)

常用于图片、音频、PDF等非文本数据。

```python
with open("image.jpg", "rb") as f:
    data = f.read()
    print(len(data))  # 输出字节长度
```

或写入：
```python
with open("copy.jpg", "wb") as f_out:
    f_out.write(data)
```

---

##  **9. File & Exception — 文件异常处理**

结合 `try … except` 可以避免程序因文件问题崩溃：

```python
try:
    with open("unknown.txt", "r", encoding="utf-8") as f:
        print(f.read())
except FileNotFoundError:
    print(" File not found!")
```

输出：
```
 File not found!
```

---

##  **10. Example **

```python
students = {"Tom": 89, "Lucy": 95, "Jack": 72}

with open("scores.txt", "w", encoding="utf-8") as f:
    for name, score in students.items():
        f.write(f"{name}: {score}\n")

# 再读取看看
with open("scores.txt", "r", encoding="utf-8") as f:
    print(f.read())
```

输出：
```
Tom: 89
Lucy: 95
Jack: 72
```

---

##  **11. 常用文件方法速查**

| 方法名              | 英文说明              | 中文说明         | 示例 |
| ------------------- | --------------------- | ---------------- | ---- |
| `.read(size)`       | read N characters     | 读取指定数量字符 |      |
| `.readline()`       | read one line         | 读取单行         |      |
| `.readlines()`      | read all lines        | 读取所有行       |      |
| `.write(text)`      | write a string        | 写入字符串       |      |
| `.writelines(list)` | write list of strings | 写入多行         |      |
| `.seek(pos)`        | move cursor           | 移动读写指针     |      |
| `.tell()`           | show current position | 查看当前指针位置 |      |
| `.close()`          | close file            | 关闭文件         |      |

# **Chapter 8：Advanced Functions & Common Methods **

---

###  **Overview —— 概述**

**Functions（函数）** 是 Python 的核心机制之一。  
在日常编程中，你需要配合**内置函数**（如 `len()`、`sum()`）与**对象方法（methods）**（如 `list.append()`、`str.rstrip()`）来完成常见操作。

---

##  **1. 内置函数（Built‑in Functions）**

Python 提供了大量开箱即用的函数：

| 函数                | English Description     | 中文说明         | 示例                         |
| ------------------- | ----------------------- | ---------------- | ---------------------------- |
| `len(x)`            | length of x             | 返回长度         | `len([1,2,3]) → 3`           |
| `sum(iterable)`     | sum all numbers         | 求和             | `sum([1,2,3]) → 6`           |
| `max(x)` / `min(x)` | maximum / minimum value | 最大/最小值      | `max([3,5,1]) → 5`           |
| `sorted(x)`         | return sorted list      | 返回排序后的列表 | `sorted([3,1,2]) → [1,2,3]`  |
| `type(x)`           | show type               | 查看数据类型     | `type("hi") → <class 'str'>` |
| `range(n)`          | sequence of numbers     | 生成序列         | `range(5) → 0...4`           |
| `input()`           | get user input          | 读取输入         | `name = input("Name: ")`     |
| `print()`           | print to screen         | 打印输出         | `print("Hello")`             |

---

##  **2. List Methods — 列表的常用方法**

| 方法名          | 功能说明           | 示例                 |
| --------------- | ------------------ | -------------------- |
| `.append(x)`    | 向列表末尾追加元素 | `nums.append(100)`   |
| `.insert(i, x)` | 在索引 i 处插入    | `nums.insert(1, 50)` |
| `.extend(lst)`  | 合并另一个列表     | `a.extend(b)`        |
| `.remove(x)`    | 删除第一个匹配元素 | `nums.remove(10)`    |
| `.pop(i)`       | 删除并返回元素     | `nums.pop(0)`        |
| `.clear()`      | 清空列表           | `nums.clear()`       |
| `.count(x)`     | 统计出现次数       | `nums.count(5)`      |
| `.index(x)`     | 查找索引位置       | `nums.index(5)`      |
| `.sort()`       | 原地排序           | `nums.sort()`        |
| `.reverse()`    | 反转顺序           | `nums.reverse()`     |

###  示例：

```python
nums = [1, 3, 5]
nums.append(7)
nums.insert(1, 2)
nums.extend([9, 11])
print(nums)        # [1, 2, 3, 5, 7, 9, 11]
```

 `.append()` 是最常用的 **列表添加方法**。

---

##  **3. String Methods — 字符串常用方法**

| 方法名          | 功能           | 示例 & 结果                             |
| --------------- | -------------- | --------------------------------------- |
| `.upper()`      | 转大写         | `"hi".upper() → "HI"`                   |
| `.lower()`      | 转小写         | `"Hi".lower() → "hi"`                   |
| `.title()`      | 每词首字母大写 | `"hello world".title()`                 |
| `.strip()`      | 去除前后空格   | `" hi ".strip() → "hi"`                 |
| `.rstrip()`     | 去除右边空白   | `"hello\n".rstrip() → "hello"`          |
| `.lstrip()`     | 去除左边空白   | `"  hi".lstrip() → "hi"`                |
| `.split(sep)`   | 切割成列表     | `"a,b,c".split(",") → ['a','b','c']`    |
| `.join(list)`   | 拼接字符串列表 | `" ".join(['I','am','OK']) → "I am OK"` |
| `.replace(a,b)` | 替换           | `"I like C".replace("C","Python")`      |
| `.find(x)`      | 查找下标位置   | `"apple".find("p") → 1`                 |
| `.count(x)`     | 计数           | `"banana".count("a") → 3`               |

###  示例演示

```python
message = "  hello python  \n"
print(message.rstrip())   # 去掉右边换行 → "  hello python"
print(message.strip())    # 去掉左右空格 → "hello python"
print(message.upper())    # "  HELLO PYTHON  \n"
```

> `.rstrip()` 专门用于清理**行尾空格和换行符**，非常常用。

---

##  **4. Dictionary Methods — 字典常用方法**

| 方法名             | 功能           | 示例                    |
| ------------------ | -------------- | ----------------------- |
| `.keys()`          | 返回所有键     | `d.keys()`              |
| `.values()`        | 返回所有值     | `d.values()`            |
| `.items()`         | 返回键值对     | `d.items()`             |
| `.get(k, default)` | 获取键对应值   | `d.get("age", 0)`       |
| `.update({...})`   | 更新或添加键值 | `d.update({"age": 20})` |
| `.pop(k)`          | 删除键并返回值 | `d.pop("name")`         |
| `.clear()`         | 清空字典       | `d.clear()`             |

###  示例

```python
student = {"name": "Alice", "age": 18}
print(student.get("age"))        # 18
student.update({"score": 90})
print(student)                   # {'name': 'Alice', 'age': 18, 'score': 90}
```

---

##  **5. Set Methods — 集合常用方法**

| 方法名             | 功能               | 示例                |
| ------------------ | ------------------ | ------------------- |
| `.add(x)`          | 添加元素           | `s.add(5)`          |
| `.remove(x)`       | 删除（若无则报错） | `s.remove(2)`       |
| `.discard(x)`      | 删除（若无则跳过） | `s.discard(2)`      |
| `.clear()`         | 清空集合           | `s.clear()`         |
| `.union(t)`        | 并集               | `s.union(t)`        |
| `.intersection(t)` | 交集               | `s.intersection(t)` |
| `.difference(t)`   | 差集               | `s.difference(t)`   |

###  示例

```python
a = {1, 2, 3}
b = {3, 4, 5}
print(a.union(b))          # {1, 2, 3, 4, 5}
print(a.intersection(b))   # {3}
```

---

##  **6. Chaining Methods 链式方法调用**

```python
msg = "  python functions  "
clean = msg.strip().title().replace("Functions", "Methods")
print(clean)  # "Python Methods"
```

---

##  **7. Custom Functions Revisited 自定义函数进阶**

```python
def clean_text(s):
    """清理字符串两端空格并设为标题格式"""
    return s.strip().title()

print(clean_text("   hello world   "))   # Hello World
```

---

##  **8. Real Example 示例：格式化名单**

```python
names = [" alice ", "Bob ", "CHARLIE  "]
clean_names = []

for n in names:
    clean_names.append(n.strip().title())

print(clean_names)
```

输出：
```
['Alice', 'Bob', 'Charlie']
```

 `.strip()` 去空格 + `.title()` 首字母大写 + `.append()` 加入新列表。

---

##  **9. 常见字符串与列表函数对照表**

| 操作     | 对象        | 方法 / 函数              | 示例                  |
| -------- | ----------- | ------------------------ | --------------------- |
| 添加元素 | list        | `.append(x)`             | `lst.append(5)`       |
| 计数     | list/str    | `.count(x)`              | `"apple".count("p")`  |
| 去空格   | str         | `.strip()` / `.rstrip()` | `"  hi ".strip()`     |
| 切割     | str         | `.split(",")`            | `"a,b".split(",")`    |
| 拼接     | list 到 str | `",".join(list)`         | `",".join(["a","b"])` |
| 长度     | list/str    | `len(x)`                 | `len("hi") → 2`       |
| 排序     | list        | `.sort()`                | `nums.sort()`         |
| 清空     | list/dict   | `.clear()`               | `lst.clear()`         |

---



# Chapter 8：Python `print()`

---

## 1 ， `print()` 的基本作用

`print()` 是 Python 的内置输出函数，用来：
> **把数据输出到标准输出（通常是屏幕）或文件中。**

最常见用法：
```python
print("Hello, world!")
```
输出：
```
Hello, world!
```

---

##  2 ， `print()` 的语法结构

完整语法：
```python
print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)
```

我们逐个解释这几个常用参数👇

---

###  `*objects`

- 表示要打印的一个或多个对象（字符串、数字、变量都可以）。
- 多个对象用逗号分隔。

```python
print("Python", "is", "fun")
```
输出：
```
Python is fun
```

💬 默认情况多个对象之间用空格分隔。

---

###  `sep` (separator) — 分隔符

定义多个项目之间的「分隔符」。

默认是一个空格 `' '`，可以自定义任何分隔符：

```python
print("1", "2", "3", sep=", ")
```
输出：
```
1, 2, 3
```

更多例子：
```python
print("apple", "banana", "cherry", sep=" | ")
# 输出: apple | banana | cherry
```



---

###  `end` — 结束符

定义每次 `print()` 执行后的结束字符（默认是换行 `\n`）。

- 默认：
  ```python
  print("Hello")
  print("World")
  ```
  输出：
  ```
  Hello
  World
  ```

- 自定义结束符：
  ```python
  print("Hello", end=", ")
  print("World")
  ```
  输出：
  ```
  Hello, World
  ```

---

###  `file` — 输出目标

可以让打印内容输出到文件，而不是屏幕。

```python
with open("output.txt", "w") as f:
    print("Save this text.", file=f)
```

💬 默认目标是屏幕（`sys.stdout`），  
但加上 `file=` 可以重定向到文件。

---

###  `flush` (刷新)

指定是否立即刷新缓存区输出。  
默认 `False`（可以稍作延迟）。  
设为 `True` 强制即时打印（用于实时输出或日志）。

```python
print("Processing...", flush=True)
```

---

##  3 ， 打印不同类型的数据

### 打印数字：
```python
x = 10
print(x)
```
输出：
```
10
```

### 打印字符串与变量：
```python
name = "Alice"
age = 22
print("Name:", name, "Age:", age)
```
输出：
```
Name: Alice Age: 22
```

### 同时打印复杂对象：
```python
print([1, 2, 3], {"a": 1, "b": 2})
```
输出：
```
[1, 2, 3] {'a': 1, 'b': 2}
```

---

##  4 ， 特殊用法：格式化与连接

###   f-string（推荐）

可以在字符串里直接嵌变量：
```python
name = "Bob"
score = 95
print(f"{name} scored {score}")
```
输出：
```
Bob scored 95
```

###  拼接字符串

使用 `+` 拼接：
```python
print("Hello " + "World")
```
输出：
```
Hello World
```

不过拼接时如果有数字要转换类型：
```python
print("Score: " + str(score))
```

---

##  5 ， 组合示例对照

| 用法         | 示例代码                          | 输出结果                         |
| ------------ | --------------------------------- | -------------------------------- |
| 默认打印     | `print("Hello", "Python")`        | `Hello Python`                   |
| 自定义分隔符 | `print("A", "B", "C", sep=", ")`  | `A, B, C`                        |
| 不换行       | `print("Hello", end=" ")`         | `Hello `（和下一次输出连在一起） |
| 输出到文件   | `print("data", file=f)`           | 文件中写入 `"data"`              |
| 实时刷新     | `print("Loading...", flush=True)` | 立即显示，不缓存                 |

---

##  6 ， `print()` 小技巧与注意事项

- 自动加空格：多个参数自动插入空格分隔。
- 自动换行：默认结尾加 `\n`。
- 输出类型安全：不同数据类型（数字、字符串）都能直接打印，不需要转换。
- 性能：`print()` 适合调试输出，不建议频繁打印大量数据。

---

##  7，一句话总结

> `print()` 是 Python 最常用的输出函数，  
> 主要参数是：
> - `sep` → 自定义分隔符  
> - `end` → 控制行结尾方式  
> - `file` → 指定输出目标  
> - `flush` → 控制即时输出  
>
> 默认把多个内容用空格分隔并换行输出，可灵活控制输出格式。

---

