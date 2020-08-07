import React from 'react';

class App extends React.Component {
    render() {
        const welcomeMessage = "Hello World!";
        return (
            <main>
                <h1>{welcomeMessage}</h1>
                <p>Nice to meet you React.</p>
            </main>
        )
    }
}

export default App