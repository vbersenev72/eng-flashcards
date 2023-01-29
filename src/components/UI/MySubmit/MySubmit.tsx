import classes from "./MySubmit.module.css"



interface IMySubmitProps {
  children: any
  classFlag: boolean

}

export function MySubmit ({children, classFlag}: IMySubmitProps) {
  return (
    <div className={classFlag ? classes.MySubmitCorrect : classes.MySubmitInCorrect}>
      <h1>{children}</h1>
    </div>
  );
}

// Этот способ не работает, нужно либо захардкордить, либо что то поменять в динамическом подставлении стилей



