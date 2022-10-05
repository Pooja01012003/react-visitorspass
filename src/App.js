import React from 'react';
import { CommandBar } from '@fluentui/react/';
import { initializeIcons } from '@fluentui/react';
import { DetailsList } from '@fluentui/react';
import { Panel } from '@fluentui/react';
import { useBoolean } from '@fluentui/react-hooks';
import { Label } from '@fluentui/react/lib/Label';
import { TextField } from '@fluentui/react/lib/TextField';
import { useId } from '@fluentui/react-hooks';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import React, { useState } from 'react';

export default function App() {
  //CommandBar
  initializeIcons();
  const [Id, setId] = useState();
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [PhoneNumber, setPhoneNumber] = useState();
  const [Level, setLevel] = useState();
  const values = [
    {
      key: 'Refresh',
      text: 'Refresh',
      iconProps: { iconName: 'Refresh' },
    },
    {
      key: 'Add a user',
      text: ' Add a user',
      iconProps: { iconName: 'Add' },
      onClick: () => {
        openPanel();
      },
    },
    {
      key: 'Delete ',
      text: 'Delete User ',
      iconProps: { iconName: 'delete' },
      disabled: true,
    },
  ];
  //userData
  const userData = [
    {
      Id: 1,
      Name: 'Poorna',
      Email: 'poorna@gmail.com',
      PhoneNumber: 1234567891,
      Level: 'Beginner',
    },
    {
      Id: 2,
      Name: 'Admin',
      Email: 'admin@gmail.com',
      PhoneNumber: 1987654321,
      Level: 'Beginner',
    },
  ];
  //columns
  const columns = [
    {
      key: 'Id',
      name: 'Id',
      fieldName: 'Id',
      minWidth: 150,
      maxWidth: 250,
    },
    {
      key: 'Name',
      name: 'Name',
      fieldName: 'Name',
      minWidth: 150,
      maxWidth: 250,
    },
    {
      key: 'Email',
      name: 'Email',
      fieldName: 'Email',
      minWidth: 150,
      maxWidth: 250,
    },
    {
      key: 'PhoneNumber',
      name: 'PhoneNumber',
      fieldName: 'PhoneNumber',
      minWidth: 150,
      maxWidth: 250,
    },
    {
      key: 'Level',
      name: 'Level',
      fieldName: 'Level',
      minWidth: 150,
      maxWidth: 250,
    },
  ];
  // useEffect
  const [newInfo, setnewInfo] = useState(userData);
  function handleAdd() {
    const setData = {
      Id: Id,
      Name: Name,
      Email: Email,
      PhoneNumber: PhoneNumber,
      Level: Level,
    };
    setnewInfo([...newInfo, setData]);
  }
  console.log(newInfo);
  //pannel for Adduser
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] =
    useBoolean(false);
  //Label
  const textFieldId = useId('anInput');
  //Button
  const onRenderFooterContent = React.useCallback(() => (
    <div>
      <PrimaryButton onClick={handleAdd}>Add</PrimaryButton>
      <DefaultButton onClick={dismissPanel}>Cancel</DefaultButton>
    </div>
  ));

  return (
    <div>
      <h2>Users</h2>
      <CommandBar items={values} />
      <DetailsList items={newInfo} columns={columns} />
      <Panel
        headerText="ADD NEW USERS"
        isOpen={isOpen}
        onDismiss={dismissPanel}
        onRenderFooterContent={onRenderFooterContent}
        isFooterAtBottom={true}
      >
        <div>
          <Label htmlFor={textFieldId}>Id</Label>
          <TextField
            id={textFieldId}
            onChange={(_event, values) => {
              setId(values);
            }}
          />
          <Label htmlFor={textFieldId}>Name</Label>
          <TextField
            id={textFieldId}
            onChange={(_event, values) => {
              setName(values);
            }}
          />
          <Label htmlFor={textFieldId}>Email</Label>
          <TextField
            id={textFieldId}
            onChange={(_event, values) => {
              setEmail(values);
            }}
          />
          <Label htmlFor={textFieldId}>PhoneNumber</Label>
          <TextField
            id={textFieldId}
            onChange={(_event, values) => {
              setPhoneNumber(values);
            }}
          />
          <Label htmlFor={textFieldId}>Level</Label>
          <TextField
            id={textFieldId}
            onChange={(_event, values) => {
              setLevel(values);
            }}
          />
        </div>
      </Panel>
    </div>
  );
}
