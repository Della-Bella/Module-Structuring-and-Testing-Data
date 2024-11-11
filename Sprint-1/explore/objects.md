## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?

console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`

'object'

Answer the following questions:

What does `console` store?
stores functions and properties

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
The syntax console.log or console.assert uses dot notation to access a specific function (or method) within the console object. The . (dot) is an operator that accesses a property or method of an object. So, console.log refers to the log method within the console object, allowing you to send messages to the console output.
