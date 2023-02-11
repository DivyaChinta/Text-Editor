import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import {
  Heading,
  Button,
  Image,
  ImageElement,
  EditorContainer,
  HrElement,
  ButtonContainer,
  TextAreaElement,
  UnderlineButton,
  ItalicButton,
} from './style'

import './index.css'

class TextEditor extends Component {
  state = {textToBold: false, textToItalic: false, textToUnderline: false}

  bold = () => {
    this.setState(prevState => ({textToBold: !prevState.textToBold}))
  }

  italic = () => {
    this.setState(prevState => ({textToItalic: !prevState.textToItalic}))
  }

  underline = () => {
    this.setState(prevState => ({textToUnderline: !prevState.textToUnderline}))
  }

  render() {
    const {textToBold, textToItalic, textToUnderline} = this.state

    const color = textToBold === false ? '#f1f5f9' : ' #faff00'

    const italicButtonColor = textToItalic === false ? '#f1f5f9' : ' #faff00'

    const underlineButtonColor =
      textToUnderline === false ? '#f1f5f9' : ' #faff00'

    const fontWeight = textToBold === false ? 'normal' : 'bold'

    const fontStyle = textToItalic === false ? 'normal' : 'italic'

    const textDecoration = textToUnderline === false ? 'normal' : 'underline'

    return (
      <div className="background-container">
        <div className="central-container">
          <div className="image-container">
            <div>
              <Heading>Text Editor</Heading>
              <ImageElement>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                  className="image"
                  alt="text editor"
                />
              </ImageElement>
            </div>
            <EditorContainer>
              <ButtonContainer>
                <li>
                  <Button
                    data-testid="bold"
                    color={color}
                    type="button"
                    onClick={this.bold}
                  >
                    <VscBold size={25} />
                  </Button>
                </li>
                <li>
                  <ItalicButton
                    className="button"
                    data-testid="italic"
                    type="button"
                    color={italicButtonColor}
                    onClick={this.italic}
                  >
                    <GoItalic size={25} />
                  </ItalicButton>
                </li>
                <li>
                  <UnderlineButton
                    className="button"
                    data-testid="underline"
                    type="button"
                    color={underlineButtonColor}
                    onClick={this.underline}
                  >
                    <AiOutlineUnderline size={25} />
                  </UnderlineButton>
                </li>
              </ButtonContainer>
              <HrElement />
              <TextAreaElement
                fontWeight={fontWeight}
                fontStyle={fontStyle}
                textDecoration={textDecoration}
              />
            </EditorContainer>
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
