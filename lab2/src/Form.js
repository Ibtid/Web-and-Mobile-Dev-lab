import React from 'react';

const Form = (props) => {
  return (
    <div className='timer'>
      <form onSubmit={props.handleSubmit}>
        <div className='timerInput_One'>
          <div>Title</div>
          <input type='text' value={props.title} onChange={props.handleTitle} />
        </div>
        <div className='timerInput_One'>
          <div>Project</div>
          <input
            type='text'
            value={props.project}
            onChange={props.handleProject}
          />
        </div>
      </form>
      <div className='timerEdit__buttonGroup'>
        <button
          className='timerEdit__update'
          type='submit'
          onClick={props.handleSubmit}>
          {props.creation ? 'Create' : 'Update'}
        </button>
        <div className='timerEdit__cancel' onClick={props.changeEditMode}>
          Cancel
        </div>
      </div>
    </div>
  );
};

export default Form;
