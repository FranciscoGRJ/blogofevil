type ContainerProps={
  entryList: string[];
}
export function Container({entryList}: ContainerProps) {
  return <div id="container" >
    {entryList.map((entry, index)=>(<p key={index}>{entry}</p>))}
  </div>
}
