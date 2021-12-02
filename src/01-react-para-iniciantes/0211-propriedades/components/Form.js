import Button from './Button';
import Input from './Input';

const Form = () => {
    return (
        <form>
            <Input type="email" labelName="Email" labelAndInputID="email" required />
            <Input type="password" labelName="Password" labelAndInputID="password" />
            <Button />
        </form>
    );
}

export default Form;
