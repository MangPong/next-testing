import type {Config} from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './', // ระบุโฟลเดอร์โปรเจกต์หลัก
});

const config: Config = {
  collectCoverage: true,
  coverageDirectory: 'coverage', // ระบุที่เก็บรายงาน coverage
  testEnvironment: 'node', // ใช้ jsdom สำหรับสภาพแวดล้อมของการทดสอบ
};

export default createJestConfig(config);
