"use client"

import { Debug } from 'informed';
import { Input } from '../Components/Informed/Input';
import { Form } from '../Components/Informed/Form';
import { Button } from '@adobe/react-spectrum';
import UserInfo from '../components/UserInfo';

export default function Page() {
  return (
    <>
      <UserInfo />
      <Form>
        <Input name="name" label="Name" required="Name Required" />
        <Input name="age" type="number" label="Age" required="Age Required" />
        <Input name="phone" label="Phone" formatter="+1 (###)-###-####" />
        <Input name="color" label="Favorite Color" defaultValue="Green" />
        <Button type="submit">submit</Button>
        <div style={{ textAlign: 'left' }}>
          <Debug />
        </div>
      </Form>
    </>
  );
}