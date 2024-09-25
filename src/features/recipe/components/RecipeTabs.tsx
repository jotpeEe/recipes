import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

type TRecipeTabs = {
  tabs?: (string | undefined)[] | undefined;
  handleChange?: (value: string) => void;
};

export const RecipeTabs = ({ tabs, handleChange }: TRecipeTabs) =>
  tabs &&
  !(tabs.length <= 1) && (
    <Tabs defaultValue={tabs[0]} onValueChange={handleChange}>
      <TabsList className="w-full">
        {tabs.map(
          tab =>
            tab && (
              <TabsTrigger key={tab} value={tab} className="w-full">
                {tab}
              </TabsTrigger>
            )
        )}
      </TabsList>
    </Tabs>
  );
