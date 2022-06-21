import { useState } from "react";
import { animated, config, useChain, useSpring, useSpringRef } from "react-spring";
import { Trash } from "phosphor-react";
import './styles.scss';

interface TaskProps {
  content: string;
  deleteTask: () => void;
  isTaskConcluded: () => void;
}

export function Task({ content, deleteTask, isTaskConcluded }:TaskProps) {
  const [isChecked, setIsChecked] = useState(false)
  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    backgroundColor: isChecked ? "#8284FA" : "#3a3a3a", 
    borderColor: isChecked ? "#8284FA" : "#4EA8DE",
    config: config.gentle,
    ref: checkboxAnimationRef
  });
  const [checkmarkLength, setCheckmarkLength] = useState(0);

  const checkmarkAnimationRef = useSpringRef();
  const checkmarkAnimationStyle = useSpring({
    x: isChecked ? 0 : checkmarkLength,
    config: config.gentle,
    ref: checkmarkAnimationRef
  });

  useChain(
    isChecked 
      ?[checkboxAnimationRef, checkmarkAnimationRef]
      :[checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.2]  
  );

  return (
    <div className="taskContainer">
      <label>
        <input 
          type="checkbox" 
          onChange={() => {
            setIsChecked(!isChecked);
            isTaskConcluded()
          }}
        />
        <animated.svg
          style={checkboxAnimationStyle} 
          className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
          aria-hidden="true"
          viewBox="0 1 14 11"
          fill="none"
        >
          <animated.path
            d="M1 4.5L5 9L14 1"
            strokeWidth="3"
            stroke="#fff"
            strokeDasharray={checkmarkLength}
            strokeDashoffset={checkmarkAnimationStyle.x}
            ref={(ref) => {
              if (ref) {
                setCheckmarkLength(ref.getTotalLength());
              }
            }}
          />
        </animated.svg>
      </label>
    <p className={`${isChecked ? "textChecked" : "textUnchecked"}`}>{content}</p>
      <button onClick={() => deleteTask()} className="taskDelete" title="Deletar comentário">
        <Trash size={20} />
      </button>
    </div>
  );
}