import { CommandBar, ICommandBarItemProps, mergeStyles } from '@fluentui/react';
import { commandBarHeaderStyles } from './CommandBarHeader.styles';

const CommandBarHeader = () => {
  const items: ICommandBarItemProps[] = [
    {
      key: 'logo',
      onRender: () => (
        <div className={mergeStyles(commandBarHeaderStyles.logoContainer)}>
          <img src="/path/to/your/logo.png" alt="Logo" className={mergeStyles(commandBarHeaderStyles.logo)} />
        </div>
      ),
      className: 'logo-item',
    },
    {
      key: 'tab1',
      name: 'Tab 1',
      onClick: () => console.log('Tab 1 clicked'),
    },
    {
      key: 'tab2',
      name: 'Tab 2',
      onClick: () => console.log('Tab 2 clicked'),
    },
    {
      key: 'tab3',
      name: 'Tab 3',
      onClick: () => console.log('Tab 3 clicked'),
    },
    {
      key: 'spacer',
      onRender: () => <div className={mergeStyles(commandBarHeaderStyles.spacer)} />,
    },
    {
      key: 'tab4',
      name: 'Tab 4',
      onClick: () => console.log('Tab 4 clicked'),
    },
    {
      key: 'tab5',
      name: 'Tab 5',
      onClick: () => console.log('Tab 5 clicked'),
    },
  ];

  return (
    
  <div className={mergeStyles(commandBarHeaderStyles.root)}>
      <div className={mergeStyles(commandBarHeaderStyles.leftSection)}>
        <img src="/path/to/your/logo.png" alt="Logo" className={mergeStyles(commandBarHeaderStyles.logo)} />
        <CommandBar items={items.slice(1, 4)} /> {/* Slice the items for tab1, tab2, and tab3 */}
      </div>
      <div className={mergeStyles(commandBarHeaderStyles.rightSection)}>
        <CommandBar items={items.slice(5)} /> {/* Slice the items for tab4 and tab5 */}
      </div>
  </div>
  );
};

export default CommandBarHeader;
