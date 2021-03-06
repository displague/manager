import * as QRCode from 'qrcode.react';
import { compose } from 'ramda';
import * as React from 'react';
import { StyleRulesCallback, WithStyles, withStyles } from 'src/components/core/styles';
import Typography from 'src/components/core/Typography';
import RenderGuard from 'src/components/RenderGuard';
import CopyableTextField from 'src/features/Volumes/CopyableTextField';

type ClassNames = 'root' | 'instructions' | 'qrcode';

const styles: StyleRulesCallback<ClassNames> = (theme) => ({
  root: {},
  instructions: {
    marginTop: theme.spacing.unit * 2,
  },
  qrcode: {
    margin: `${theme.spacing.unit * 2}px 0`,
    border: `5px solid #fff`,
  }
});

interface Props {
  secret: string;
  secretLink: string;
}

type CombinedProps = Props & WithStyles<ClassNames>;

const QRCodeForm: React.StatelessComponent<CombinedProps> = (props) => {
  const { classes, secret, secretLink } = props;
  return (
    <React.Fragment>
      <Typography
        role="header"
        variant="h3"
        data-qa-copy
        className={classes.instructions}
      >
        Scan this QR code to add your Linode account to your TFA app:
      </Typography>
      <QRCode
        size={200}
        level="H" // QR code error checking level ("High"); gives a higher resolution code
        value={secretLink}
        className={classes.qrcode}
        data-qa-qr-code
      />
      <Typography
        role="header"
        variant="h3"
        data-qa-copy
        className={classes.instructions}
      >
        If your TFA app does not have a scanner, you can use this secret key:
      </Typography>
      <CopyableTextField
        className={classes.root}
        value={secret}
      />
    </React.Fragment>
  );
}

const styled = withStyles(styles);

export default compose<any, any, any>(
  styled,
  RenderGuard
  )(QRCodeForm);
