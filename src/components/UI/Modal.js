import { useContext, useReducer } from 'react';
import { send } from 'emailjs-com';
import classes from './Modal.module.css';
import Card from './Card';
import TertiaryHeading from '../Typography/TertiaryHeading';
import TextHighlight from '../Typography/TextHighlight';
import Button from './Button';
import AppContext from '../../store/app-context';

const initialValues = {
  emailIsValid: false,
  messageIsValid: false,
  formIsValid: false,
  toSend: {
    to_name: '',
    from_name: '',
    reply_to: '',
    message: '',
  },
};

const reducerFn = (state, action) => {
  switch (action.type) {
    case 'EMAIL':
      return {
        ...state,
        emailIsValid: action.val,
        toSend: { ...state.toSend, from_name: action.email },
      };
    case 'MESSAGE':
      return {
        ...state,
        messageIsValid: action.val,
        toSend: { ...state.toSend, message: action.message },
      };
    default:
      return initialValues;
  }
};
const Modal = (props) => {
  const [formState, dispatch] = useReducer(reducerFn, initialValues);
  const appCtx = useContext(AppContext);
  const onCancelHandler = () => {
    appCtx.showModal(false);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.toSend);
    send(
      'service_zzw378b',
      'template_2vlqzeq',
      formState.toSend,
      'VfpGXmIoyG5VXuwhY'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    appCtx.showModal(false);
  };
  return (
    <Card className={classes['modal']}>
      <div className={classes.cancel} onClick={onCancelHandler}>
        <span>⨯</span>
      </div>
      <TertiaryHeading>
        <TextHighlight
          style={{
            backgroundColor: 'var(--color-primary-accent)',
            borderRadius: '10px',
          }}
        >
          Contact Me
        </TextHighlight>
      </TertiaryHeading>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <input
          type='text'
          className={classes.input}
          placeholder='Your Email'
          name='from_name'
          value={formState.toSend.from_name}
          onChange={(e) => {
            dispatch({
              type: 'EMAIL',
              email: e.target.value,
              val: e.target.value.includes('@'),
            });
          }}
          style={{
            backgroundColor: !formState.emailIsValid && 'rgba(255,0,0,0.1)',
          }}
        />
        <textarea
          value={formState.toSend.message}
          className={classes.input}
          name='message'
          cols='30'
          rows='10'
          placeholder='Your Message'
          onChange={(e) => {
            dispatch({
              type: 'MESSAGE',
              message: e.target.value,
              val: e.target.value.length > 0,
            });
          }}
          style={{
            backgroundColor: !formState.messageIsValid && 'rgba(255,0,0,0.1)',
          }}
        ></textarea>
        <Button
          disabled={
            (!formState.emailIsValid || !formState.messageIsValid) && 'disabled'
          }
          className={classes['submit-btn']}
          type='submit'
        >
          Send
        </Button>
      </form>
    </Card>
  );
};

export default Modal;
