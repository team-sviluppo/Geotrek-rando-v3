import { Download } from 'components/Icons/Download';
import { Printer } from 'components/Icons/Printer';
import { Activity } from 'modules/activities/interface';
import React from 'react';
import SVG from 'react-inlinesvg';
import { colorPalette, fillSvgWithColor } from 'stylesheet';
import { DetailsButton } from '../DetailsButton';
import { DetailsButtonDropdown } from '../DetailsButtonDropdown';

interface DetailsTopIconsProps {
  className?: string;
  practice?: Activity;
  pdfUri?: string;
  gpxUri?: string;
  kmlUri?: string;
}

export const DetailsTopIcons: React.FC<DetailsTopIconsProps> = ({
  className,
  practice,
  pdfUri,
  gpxUri,
  kmlUri,
}) => {
  const dropdownButtonOptions = [];
  if (gpxUri !== undefined) dropdownButtonOptions.push({ label: 'GPX', value: gpxUri });
  if (kmlUri !== undefined) dropdownButtonOptions.push({ label: 'KML', value: kmlUri });

  return (
    <div className={`${className ?? ''} flex flex-col`}>
      <div className="flex justify-between items-center">
        {practice !== undefined && <ActivityLogo src={practice.pictogram} />}
        <div className="hidden desktop:flex space-x-4">
          {pdfUri !== undefined && (
            <DetailsButton url={pdfUri}>
              <Printer size={30} />
            </DetailsButton>
          )}
          {dropdownButtonOptions.length > 0 && (
            <DetailsButtonDropdown options={dropdownButtonOptions}>
              <Download className="text-primary1 m-2" size={30} />
            </DetailsButtonDropdown>
          )}
        </div>
      </div>
    </div>
  );
};

const ActivityLogo: React.FC<{ src: string }> = ({ src }) => (
  <div
    className="h-18 w-18 rounded-full
      hidden desktop:flex items-center justify-center
      shadow-md
    bg-primary1"
  >
    <SVG src={src} preProcessor={fillSvgWithColor(colorPalette.white)} height={53} width={53} />
  </div>
);