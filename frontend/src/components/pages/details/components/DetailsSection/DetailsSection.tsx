import { FormattedMessage } from 'react-intl';

export interface DetailsSectionProps {
  titleId: string;
  children: React.ReactNode;
}

export const DetailsSection: React.FC<DetailsSectionProps> = ({ titleId, children }) => {
  return (
    <div
      className="flex flex-col
      py-6 desktop:py-12
      border-solid border-greySoft border-b"
    >
      <p className="text-Mobile-H1 desktop:text-H2 font-bold">
        <FormattedMessage id={titleId} />
      </p>
      <div
        className="mt-3 desktop:mt-4
        text-Mobile-C1 desktop:text-P1"
      >
        {children}
      </div>
    </div>
  );
};