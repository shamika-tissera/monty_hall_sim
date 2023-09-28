# Monty Hall Problem Simulator

## Description of the problem
The Monty Hall problem is a famous puzzle that challenges our intuition about probability. It is based on a game show scenario where the contestant has to choose one of three doors, behind which there is either a car or a goat. The host, who knows what is behind each door, opens one of the other doors to reveal a goat and then offers the contestant the chance to switch their choice to the remaining unopened door. The question is: should the contestant switch or stick with their original choice?

The answer, which may seem surprising, is that the contestant should always switch. By switching, they increase their chances of winning the car from 1/3 to 2/3. This is because the host's action of opening a door with a goat eliminates one of the wrong choices and transfers its probability to the other unopened door. The original choice, however, still has only 1/3 chance of being correct.

The Monty Hall problem has been a source of much debate and confusion since it was first posed in 1975. Many people find it hard to accept that switching is better than sticking, even when presented with mathematical proofs or simulations. Some of the reasons for this difficulty are cognitive biases, such as the confirmation bias, the hindsight bias, and the illusion of control. To overcome these biases, it helps to think of the problem in different ways, such as using more doors, imagining repeated trials, or using a game filter analogy.

## The Challenge
* Build a web application that proves the paradox
* The application should be able to simulate a given number of games and whether you change the door or not.
* The Technical requirement is building the Solution with a Backend & Front end.
* In the interface you should be able to enter number of simulations and choose whether to change the door.
* Then be able to press a button that starts the simulation by calling backend that performs the requested number of simulated games.

## Requirement
* Back end must be developed with C# / .NET Core.
* Front end must be developed with angular.

## Expected outcome
* When backend answers then the results of the simulations should be reflected in UI (you can use any possible way for visualizing result in Web).
* Testing should be included in the assignment.

## Important Points
* The backend has been developed with [.NET 6.0](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-6.0.22-windows-hosting-bundle-installer)