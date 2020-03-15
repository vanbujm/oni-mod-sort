import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import Lowlight from 'react-lowlight';

// @ts-ignore
import json from 'highlight.js/lib/languages/json';

Lowlight.registerLanguage('json', json);

const TextArea = styled.textarea`
  height: 100%;
  resize: none;
  overflow-y: scroll;
`;

const Output = styled(Lowlight)`
  height: 100%;
  overflow-y: scroll;

  * {
    height: 100%;
  }
`;

const Main = styled.main`
  display: flex;
  height: 100%;
  padding: 3rem;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 1rem;
`;

const Header = styled.header`
  padding: 3rem;
  font-size: 2rem;
`;

interface Label {
  distribution_platform: number;
  id: string;
  version: number;
  title: string;
}

interface ModDetailsObject {
  label: Label;
  status: number;
  enabled: boolean;
  crash_count: number;
  reinstall_path: any;
}

const sortMods = (mods: string): string => {
  try {
    const modJson = JSON.parse(mods);
    if (modJson.mods == null) return '';
    modJson.mods = modJson.mods.sort((modObj1: ModDetailsObject, modObj2: ModDetailsObject) =>
      modObj1.label.title.localeCompare(modObj2.label.title)
    );
    return JSON.stringify(modJson, null, 2);
  } catch (e) {
    return '';
  }
};

export const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const inputValueHandler = useCallback(
    e => {
      const newInput = e.target.value;
      setInput(newInput);
      setOutput(sortMods(newInput));
    },
    [setOutput]
  );
  const outputValueHandler = useCallback(e => setOutput(e.target.value), [setOutput]);

  return (
    <>
      <Header>
        <h1>Oxygen Not Included Mod Sorter</h1>
      </Header>
      <Main>
        <InputsContainer>
          <h2>Input</h2>
          <TextArea value={input} onChange={inputValueHandler} />
        </InputsContainer>
        <InputsContainer>
          <h2>Output</h2>
          <Output language="json" value={output} onChange={outputValueHandler} />
        </InputsContainer>
      </Main>
    </>
  );
};
