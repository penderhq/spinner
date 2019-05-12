import React, {Component} from 'react'
import {render} from 'react-dom'
import {injectGlobal} from 'emotion'
import {Canvas, Heading, Paragraph, Box} from '@pndr/demo-utils'
import Button from '@pndr/button'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
    }
`

import Spinner from '../../src'

class Demo extends Component {
    render() {
        return (
            <Canvas>
                <Heading>
                    Default
                </Heading>
                <Box>
                    <Spinner/>
                </Box>
                <Heading>
                    High speed
                </Heading>
                <Box>
                    <Spinner speed={200}/>
                </Box>
                <Heading>
                    Small
                </Heading>
                <Box>
                    <Spinner width={20}/>
                </Box>
                <Heading>
                    Large
                </Heading>
                <Box>
                    <Spinner width={60}/>
                </Box>
                <Heading>
                    Inside a button
                </Heading>
                <Box>
                    <Button icon={Spinner}>
                        With spinner
                    </Button>
                </Box>
            </Canvas>
        )
    }
}

render(<Demo/>, document.querySelector('#demo'))
