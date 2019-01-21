# React Interview

The app starts in A.

When the app starts, it makes a request for the maximum that the counter can reach.
The request is made using the `getNumber` function in the `skd.ts` file.
The `getNumber` function returns a promise.

If the request fails, the app must go to D.

The `60 seconds` string is a countdown.
The countdown always starts from 60 seconds.

Clicking on `+` increases the counter (second row, in the middle), clicking on `-` decreases it.
The counter must never go above the maximum (4 in the examples) or below zero.

In B1/C1, clicking on `Show QR code` displays the QR code.

In B2/C2, clicking on `Hide QR code` hides the QR code.

The QR code must display the value `chainsidepay`.

Clicking on `+` in B1 takes the app to C1.
Clicking on `+` in B2 takes the app to C2.
Same goes when clicking on `-` enough times from C1/C2.

Clicking on `Cancel` on the top right in B1/B2 takes the app to E.

When the counter reaches the maximum, the app goes to F.

When the timer expires, the app goes to G.

In E and G, clicking on `Reset` refreshes the page.

In F, clicking on `Continue` takes you to `http://example.com`.

## Implementation Requirements

Implement the app in React, using TypeScript and Redux.

Unit test components and functions.
To test the components, use [react-testing-library].


[react-testing-library]: https://github.com/kentcdodds/react-testing-library
