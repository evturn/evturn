import { Buffer } from 'buffer';
import path from 'path';
import fs from 'fs-extra';

const Path = {
  Base: `https://www.dropbox.com/s`,
  Query: `dl=1`,
};

const items = [{
    filename: `vid-28.m4v`,
    key: `ijpt86526hf68ve`,
  }, {
    key: `pinkna2jree0czu`,
    filename: `vid-1.m4v`,
  }, {
    key: `nijl1tqzivxjlnd`,
    filename: `vid-8.m4v`,
  }, {
    key: `bjoecb0guaeqkh1`,
    filename: `vid-25.m4v`,
  }, {
    key: `ibiy6fwqjyb5uaw`,
    filename: `vid-7.m4v`,
  }, {
    key: `wd5zt4mj1s6duyt`,
    filename: `vid-23.m4v`,
  }, {
    key: `e9crqmruokitmzr`,
    filename: `vid-22.m4v`,
  }, {
    key: `5qa9ojk3ao7s0zg`,
    filename: `vid-26.m4v`,
  }, {
    key: `0c507odqgqwjqv2`,
    filename: `vid-3.m4v`,
  }, {
    key: `p56i6t3gxwbypbs`,
    filename: `vid-16.m4v`,
  }, {
    key: `23upki10se8ve37`,
    filename: `vid-15.m4v`,
  }, {
    key: `8tqgae5yuf7x1n7`,
    filename: `vid-6.m4v`,
  }, {
    key: `0dk58ha0o191qmx`,
    filename: `vid-11.m4v`,
  }, {
    key: `jszss7t0msash80`,
    filename: `vid-10.m4v`,
  }, {
    key: `dsab5kvchdzvzyp`,
    filename: `vid-12.m4v`,
  }, {
    key: `a7vmoy155re7drv`,
    filename: `vid-18.m4v`,
  }, {
    key: `ogq5n2az7o8ooxp`,
    filename: `vid-2.m4v`,
}];

const CWD = process.cwd();

const Local = {
  Videos: path.join(CWD, 'src', 'static', 'videos'),
};


const buildDirectory = async () => {
  await fs.ensureDir(Local.Videos);

  console.log(`${Local.Videos} created`);
};

const download = async (params: typeof items[number]) => {
  const res = await fetch(`${Path.Base}/${params.key}/${params.filename}?${Path.Query}`);
  const buffer = await res.arrayBuffer();

  const pathname = getPathname(params.filename);

  await fs.writeFile(pathname, Buffer.from(buffer));
};

const getPathname = (filename: string) => {
  return path.join(Local.Videos, filename);
};

const run = async () => {
  await buildDirectory();

  const stats = {
    downloaded: [] as string[],
    skipped: [] as string[],
  };

  for await (const item of items) {
    const pathname = getPathname(item.filename);
    const exists = await fs.pathExists(pathname);

    if (exists) {
      stats.skipped = [...stats.skipped, item.filename];
      continue;
    }

    await download(item);
    stats.downloaded = [...stats.downloaded, item.filename];
  }

  console.log(`Assets downloaded: ${stats.downloaded.length}`);
  console.log(`Assets skipped: ${stats.skipped.length}`);
  console.log(``);
  console.log(stats.downloaded.length ? `Downloaded:` : `0 Downloaded`);
  stats.downloaded.map((filename, i) => console.log(`${i + 1}) ${filename}`));
  console.log(``);
  console.log(stats.skipped.length ? `Skipped:` : `0 Skipped`);
  stats.skipped.map((filename, i) => console.log(`${i + 1}) ${filename}`));
};

run();