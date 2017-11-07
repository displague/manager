import PropTypes from 'prop-types';
import React from 'react';

export default function SystemSummary(props, state) {
  const values = props.lvclient._getValues || {};
  const sysinfo = values.SysInfo;
  const packages = values.Packages;
  const uptime = values.Uptime;

  const days = parseInt(uptime / 86400);
  const hours = parseInt(uptime % 86400 / 3600);
  const minutes = parseInt(uptime % 3600 / 60);

  return ! sysinfo ? null : (
    <section>
      <h3>{sysinfo.hostname}</h3>
      <ul>
        <li>{sysinfo.os.dist} {sysinfo.os.distversion} ({sysinfo.kernel})</li>
        <li>{sysinfo.cpu.cores}x {sysinfo.cpu.type} ({sysinfo.type})</li>
        <li>{packages.length} available package updates</li>
        <li>{days} days, {hours}:{minutes} uptime</li>
      </ul>
    </section>
  );
}

SystemSummary.propTypes = {
  sysinfo: PropTypes.object,
  lvclient: PropTypes.object,
  dispatch: PropTypes.func,
};
