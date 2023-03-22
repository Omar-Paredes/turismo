import { Subscriber } from 'rxjs';

const readFile = (file: File, subscriber: Subscriber<any>) => {
  const filereader = new FileReader();
  filereader.readAsDataURL(file);

  filereader.onload = () => {
    subscriber.next(filereader.result);
    subscriber.complete();
  };
  filereader.onerror = (error) => {
    subscriber.error(error);
    subscriber.complete();
  };
};

export default readFile;
