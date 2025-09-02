type ButtonProps = {
  inputValue: string;
  onButtonClick: (value:string) => void;
}
export function Button({inputValue, onButtonClick}: ButtonProps) {
  return <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                 onClick={()=>onButtonClick(inputValue)}
                 >Save Comment</button>
}
