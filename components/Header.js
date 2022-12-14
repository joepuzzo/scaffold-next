import { ActionButton } from '@adobe/react-spectrum';
import ShowMenu from '@spectrum-icons/workflow/ShowMenu';
import useApp from '../hooks/useApp';

const Header = () => {

  const { toggleNav } = useApp();

  return (
    <header className="pageHeader">
      <ActionButton aria-label="Open Menu" onPress={() => toggleNav()}>
        <ShowMenu />
      </ActionButton>
    </header>
  );

};

export default Header;