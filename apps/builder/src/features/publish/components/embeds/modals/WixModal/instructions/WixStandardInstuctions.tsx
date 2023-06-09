import { OrderedList, ListItem, Code, Stack, Text } from '@chakra-ui/react'
import { JavascriptStandardSnippet } from '../../Javascript/JavascriptStandardSnippet'

export const WixStandardInstructions = () => {
  return (
    <OrderedList spacing={4} pl={5}>
      <ListItem>
        In the Wix Website Editor:
        <Code>
          Add {'>'} Embed {'>'} Embed a Widget
        </Code>
      </ListItem>
      <ListItem>
        <Stack spacing={4}>
          <Text>
            Click on <Code>Enter code</Code> and paste this code:
          </Text>
          <JavascriptStandardSnippet widthLabel="100%" heightLabel="100%" />
        </Stack>
      </ListItem>
    </OrderedList>
  )
}
