import '@testing-library/jest-dom/extend-expect';
import { createSerializer } from 'enzyme-to-json';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';

// Configure Enzyme with React 17 adapter
configure({ adapter: new Adapter() });

// Configure Jest snapshot serializer for enzyme-to-json
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

// Mocking window.document and other necessary browser APIs for Jest
global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
});
