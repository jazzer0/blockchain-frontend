import React, { useState } from 'react'
import './App.css'
import AppContainer from './components/AppContainer'
import Block from './components/Block'
import BlocksContainer from './components/BlocksContainer'
import { IBlock } from './types'

function App() {
  const mock = [
    {
      payload: {
        sequence: 1,
        timestamp: 1651932728043,
        data: 'Bloco 1',
        previousHash: 'be0975778a412173727f22ae4578ad37feb052b6af708fc4b59ad792a720d655'
      },
      header: {
        nonce: 125528,
        blockHash: 'e71a24f4311d1ebdb560c091bd0131a171d8b10758dc64355ad95327dc1dc5b9'
      }
    },
    {
      payload: {
        sequence: 2,
        timestamp: 1651932729274,
        data: 'Bloco 2',
        previousHash: 'e71a24f4311d1ebdb560c091bd0131a171d8b10758dc64355ad95327dc1dc5b9'
      },
      header: {
        nonce: 58245,
        blockHash: 'ebdaaf617e290de2c614be075b68382b7cf2474d7b2aa624b371dde2a6ff637e'
      }
    },
    {
      payload: {
        sequence: 3,
        timestamp: 1651932729883,
        data: 'Bloco 3',
        previousHash: 'ebdaaf617e290de2c614be075b68382b7cf2474d7b2aa624b371dde2a6ff637e'
      },
      header: {
        nonce: 197981,
        blockHash: 'd9f3edd0a817bf7b65503be28aae7017c1f75026017304fbaf70c8ace4809dc4'
      }
    },
    {
      payload: {
        sequence: 4,
        timestamp: 1651932731681,
        data: 'Bloco 4',
        previousHash: 'd9f3edd0a817bf7b65503be28aae7017c1f75026017304fbaf70c8ace4809dc4'
      },
      header: {
        nonce: 32898,
        blockHash: '1dc50f47c46f0a5b5c7930fb54180b3abef12c02703f19befe85f8b9fd1ba3ed'
      }
    },
    {
      payload: {
        sequence: 5,
        timestamp: 1651932731964,
        data: 'Bloco 5',
        previousHash: '1dc50f47c46f0a5b5c7930fb54180b3abef12c02703f19befe85f8b9fd1ba3ed'
      },
      header: {
        nonce: 38122,
        blockHash: '6737122124f9e16108d76a77d956ac4f3ad006b2452730be78954018a0c19f3a'
      }
    },
    {
      payload: {
        sequence: 6,
        timestamp: 1651932732300,
        data: 'Bloco 6',
        previousHash: '6737122124f9e16108d76a77d956ac4f3ad006b2452730be78954018a0c19f3a'
      },
      header: {
        nonce: 50467,
        blockHash: '40037079da1d7245a787ad0c6631309bce37b9d3976f6f29d960078d01f6e0a3'
      }
    },
    {
      payload: {
        sequence: 7,
        timestamp: 1651932732809,
        data: 'Bloco 7',
        previousHash: '40037079da1d7245a787ad0c6631309bce37b9d3976f6f29d960078d01f6e0a3'
      },
      header: {
        nonce: 83159,
        blockHash: 'a8cdc5aa36abac737887951e8463f66f32186e0fc96011167b32fd2d6fba5a67'
      }
    },
    {
      payload: {
        sequence: 8,
        timestamp: 1651932733564,
        data: 'Bloco 8',
        previousHash: 'a8cdc5aa36abac737887951e8463f66f32186e0fc96011167b32fd2d6fba5a67'
      },
      header: {
        nonce: 196462,
        blockHash: 'b216ece86055372969291c8a463670aab33d97d29a3c2d31f57d54cb928e2dff'
      }
    },
    {
      payload: {
        sequence: 9,
        timestamp: 1651932735258,
        data: 'Bloco 9',
        previousHash: 'b216ece86055372969291c8a463670aab33d97d29a3c2d31f57d54cb928e2dff'
      },
      header: {
        nonce: 88391,
        blockHash: '48967f484e3216d4e6cc4fefa74f62fd46ed4ea1c88bf29354bfd5c6cac6bf4d'
      }
    },
    {
      payload: {
        sequence: 10,
        timestamp: 1651932736061,
        data: 'Bloco 10',
        previousHash: '48967f484e3216d4e6cc4fefa74f62fd46ed4ea1c88bf29354bfd5c6cac6bf4d'
      },
      header: {
        nonce: 30837,
        blockHash: '164eaacb2b69b52bdc3003cabacf13bc0b4edab55f1ad88153a9d862c2e980a1'
      }
    }
  ]

  const [data, _setData] = useState<IBlock[]>(mock)

  return (
    <AppContainer>
      <div style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>
        <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>Blockchain</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', color: 'white', gap: '1rem', flexDirection: 'row' }}>
        <div>
          <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Configurações:</p>
        </div>

        {/* <div style={{ display: 'flex', gap: '0.5rem' }}>
          <p>Numero de Blocos:</p>

          <input type={'number'} value={12} />
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <p>Dificuldade:</p>

          <input type={'number'} value={12} />
        </div> */}
      </div>

      <BlocksContainer>
        {data.map((block) => {
          return <Block header={block.header} payload={block.payload} />
        })}
      </BlocksContainer>
    </AppContainer>
  )
}

export default App
