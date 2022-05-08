import React from 'react'
import { stringOverflow } from '../../utils'
import Container from './Container'

interface BlockProps {
  header: {
    nonce: number
    blockHash: string
  }
  payload: {
    sequence: number
    timestamp: number
    data: any
    previousHash: string
  }
}

const Block: React.FC<BlockProps> = (props) => {
  const { header, payload } = props

  return (
    <Container>
      <div style={{ justifyContent: 'center' }}>
        <div>
          <h3 style={{ color: 'red' }}>Header</h3>
          <div>
            <div>
              <p>
                <b>Nonce</b>
              </p>
            </div>

            <div>{header.nonce}</div>
          </div>

          <div>
            <div>
              <p>
                <b>Blockhash</b>
              </p>
            </div>

            <div>{stringOverflow(header.blockHash, 20)}</div>
          </div>
        </div>
      </div>

      <div style={{ justifyContent: 'center' }}>
        <h3 style={{ color: 'red' }}>Payload</h3>
        <div>
          <div>
            <p>
              <b>Sequence</b>
            </p>
          </div>

          <div>{payload.sequence}</div>
        </div>

        <div>
          <div>
            <p>
              <b>Timestamp</b>
            </p>
          </div>

          <div>{payload.timestamp}</div>
        </div>

        <div>
          <div>
            <p>
              <b>Data</b>
            </p>
          </div>

          <div>{payload.data}</div>
        </div>

        <div>
          <div>
            <p>
              <b>PreviousHash</b>
            </p>
          </div>

          <div>{stringOverflow(String(payload.previousHash), 25)}</div>
        </div>
      </div>
    </Container>
  )
}

export default Block
