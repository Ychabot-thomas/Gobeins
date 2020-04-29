import React, { useState, useContext } from 'react';

import Header from './Components/Header';
import Button from './Components/Button';
import Sidebar from './Components/Sidebar';
import Counter from './Components/Counter';
import Container from './Components/Container';

const App = () => {

    const [display, setDisplay] = useState(false);

    return (
        <Container left={<Sidebar />} header={<Header />} >
            <Button
                handleClick={() => setDisplay(!display)}
                label="toggle Counter"
            />
            {display && <Counter {...{ delay: 1000, display: display }} />}
        </Container>
    );
}

export default App;