'use client'

type TextAreaInputProps = {
  inputValue: string;
  onInputChange: (value: string) => void;
}

export function TextAreaInput({inputValue, onInputChange}: TextAreaInputProps) {
  return <textarea name="text_area_blog" 
                  id="text_area_blog" 
                  value={inputValue} 
                  placeholder="Enter text..."
                  onChange={(e)=>onInputChange(e.currentTarget.value)}/>
}
