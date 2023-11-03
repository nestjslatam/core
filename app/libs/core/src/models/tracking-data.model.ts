import { v4 as uuidv4 } from 'uuid';

interface ITrackingDataProps<T> {
  ocurredOn: Date;
  metadata: T;
}

export default class TrackingData<TMetadata> {
  private readonly _trackingId: string;
  private readonly _metadata: string;
  readonly ocurredOn: Date;

  constructor(props: ITrackingDataProps<TMetadata>) {
    this._trackingId = uuidv4();
    this._metadata = JSON.stringify(props.metadata);
    this.ocurredOn = props.ocurredOn;
  }

  getTrackingId(): string {
    return this._trackingId;
  }

  getMetadataAsObject(): TMetadata {
    return JSON.parse(this._metadata) as TMetadata;
  }

  getMetadataAsString(): string {
    return this._metadata;
  }
}
