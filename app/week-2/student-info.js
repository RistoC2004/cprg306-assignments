import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Risto Caissie</p>
      <p>
        <Link href="https://github.com/RistoC2004/cprg306-assignments" target="_blank">
          My GitHub Repository
        </Link>
      </p>
    </div>
  );
}
