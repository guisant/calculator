import * as React from 'react';
import * as math from 'mathjs';

import { 
  Container, 
  Box
} from '@chakra-ui/react';

import { 
  Title,
  Line,
  Button
} from './styles/styles';

export default function App() {
  const arrOperation = ['*', '/', '+', '.', '-'];
  const [num, setNum] = React.useState('');

  function insertNum(e) {
    const input = e.target.value;
    setNum(num + input);
  }
  
  function insertOperation(e) {
    const input = e.target.value;
    if (num === "" || (arrOperation.includes(num[num.length - 1]) && arrOperation.includes(num))) {
        return;
    } else {
      setNum(num + input);
    }
  }

  function calculate() {
    if (num === "" || arrOperation.includes(num[num.length - 1])) {
      return num;
    } else {
      setNum(math.evaluate(num));
    }
  }

    return (
      <Container maxW='2xl' centerContent>
        <Title>
          Calculadora
        </Title>
        <Box padding='4' maxW='md' bg='#2A2D30' borderRadius='10' boxShadow='dark-lg'>
          <Line>
            <Button width height margin radius disabled>{num}</Button>
          </Line>
            <Line>
              <Button primary width onClick={() => setNum("")}>AC</Button>
              <Button primary onClick={insertOperation} value={'/'}>/</Button>
            </Line>
            <Line>
              <Button onClick={insertNum} value={7}>7</Button>
              <Button onClick={insertNum} value={8}>8</Button>
              <Button onClick={insertNum} value={9}>9</Button>
              <Button primary onClick={insertOperation} value={'*'}>*</Button>
            </Line>
            <Line>
              <Button onClick={insertNum} value={4}>4</Button>
              <Button onClick={insertNum} value={5}>5</Button>
              <Button onClick={insertNum} value={6}>6</Button>
              <Button primary onClick={insertOperation} value={'-'}>-</Button>
            </Line>
            <Line>
              <Button onClick={insertNum} value={1}>1</Button>
              <Button onClick={insertNum} value={2}>2</Button>
              <Button onClick={insertNum} value={3}>3</Button>
              <Button primary onClick={insertOperation} value={'+'}>+</Button>
            </Line>
            <Line>
              <Button onClick={insertOperation} value={'.'}>.</Button>
              <Button width onClick={insertNum} value={0}>0</Button>
              <Button primary onClick={calculate}>=</Button>
            </Line>
        </Box>
      </Container>
    );         
}
