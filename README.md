# a8
COMP86 Assignment 8
Written By: Hye Jin Lim, Kam Chan Kang
UTLN: him01, kkang02

Project Overview:

Our project is a web application written in Javascript.
It is a game with a voice controlled interface.
We implemented Web Speech API (or the the Speech Recognition API to be exact).

Our program, which is easily expandable, is essentially a memorization game,
that has several geometric shapes advance toward the user, requiring the user to say the name of the shape out loud in order to destroy it. Our target user pool was young children, who struggle with learning geometric shapes. With the sense of urgency that the animation induces, it motivates the user to get the names of the shapes right in an entertaining way.

Although we are capable of modeling in more complex dimensions (i.e., 3-D instead of 2-D), and can make graphics of higher fidelity, we wanted to go for the certain feel that low fidelity web games have, in order to make the users be more immersed in the task rather than being distracted by fancy visuals.

By removing a lot of the textual information that Web Speech API originally had on its interface, we further eliminated elements of distraction, and by having the speech recognition be dependent on the status of the game (without a switch of its own), it reduces the risk of potential confusion that the user might experience. The only buttons we made available are Start, Stop, and Restart, which should be sufficient for our young users.

This program can be expanded with different objects (e.g., flags instead of shapes) and also in another language (due to Web Speech API's capabilities).


Note:
You can use the spacebar or the up arrow to jump over the shapes, but you won't learn anything from doing that :)
