export interface components {
  schemas: {
    Collection: {
      admin_email: string | null;
      api_link: string;
      api_model: string;
      /** Format: date-time */
      create_date: string;
      description: string | null;
      featured: boolean;
      /** Format: uri */
      finding_aid_url: string | null;
      /** Format: uuuid */
      id: string;
      /** Format: date-time */
      indexed_at: string | null;
      keywords: (string)[];
      /** Format: date-time */
      modified_date: string;
      published: boolean;
      representative_image?: components["schemas"]["CollectionRepresentativeImage"];
      /** Format: uri */
      thumbnail: string;
      title: string;
      visibility: components["schemas"]["Visibility"];
    };
    CollectionRepresentativeImage: {
      /** Format: uuid */
      work_id: string;
      /** Format: uri */
      url: string;
    };
    ControlledTerm: {
      id: string;
      facet: string;
      label: string;
      variants: (string)[];
    };
    ControlledTermWithRole: {
      id: string;
      facet: string;
      label: string;
      label_with_role: string;
      role: string;
      variants: (string)[];
    };
    FileSetBase: {
      /** Format: uuid */
      id: string;
      duration: number | null;
      height: number | null;
      label: string;
      mime_type: string | null;
      original_filename: string | null;
      poster_offset: number | null;
      rank: number;
      /** Format: uri */
      representative_image_url: string | null;
      role: components["schemas"]["FileSetRole"];
      /** Format: uri */
      streaming_url: string | null;
      /** Format: uri */
      webvtt: string | null;
      width: number | null;
    };
    FileSet: components["schemas"]["FileSetBase"] & ({
      accession_number: string;
      api_link: string;
      api_model: string;
      /** Format: date-time */
      create_date: string;
      digests?: {
        [key: string]: string | undefined;
      };
      description: string | null;
      extracted_metadata?: Record<string, never>;
      indexed_at: string | null;
      /** Format: date-time */
      modified_date: string;
      published: boolean;
      visibility: components["schemas"]["Visibility"];
      /** Format: uuid */
      work_id: string | null;
    });
    /**
     * @description Role of the file set 
     * @enum {string|null}
     */
    FileSetRole: "Access" | "Auxiliary" | "Preservation" | "Supplemental" | null;
    GenericIdLabel: {
      id: string;
      label: string;
    };
    /**
     * @description NUL Library Unit 
     * @enum {string|null}
     */
    LibraryUnit: "Special Collections" | "Faculty Collections" | "Government and Geographic Information Collection" | "Herskovits Library" | "Music Library" | "Transportation Library" | "University Archives" | "University Main Library" | null;
    /**
     * @description The type of the note 
     * @enum {string}
     */
    NoteType: "Awards," | "Bibliographical/Historical Note" | "Creation/Production Credits" | "General Note" | "Lanugage Note" | "Local Note" | "Performers" | "Statement of Responsibility" | "Venue/Event Date";
    /** @description Pagination info for the current response */
    PaginationInfo: {
      /** @description Full URL to the next page of results */
      next_url?: string;
      /** @description Full URL to the previous page of results */
      prev_url?: string;
      /** @description Base URL to repeat this query for a given page */
      query_url?: string;
      /** @description Tokenized query to use in subsequent GET requests */
      search_token?: string;
      /** @description Index of current page of results */
      current_page?: number;
      /** @description Number of results per page */
      limit?: number;
      /** @description Starting index of first result on the current page */
      offset?: number;
      /** @description Total number of results */
      total_hits?: number;
      /** @description Total number of result pages */
      total_pages?: number;
    };
    /**
     * @description The preservation workflow applied to the resource 
     * @enum {string|null}
     */
    PreservationLevel: "Level 1" | "Level 2" | "Level 3" | null;
    /**
     * @description Type of related resource 
     * @enum {string|null}
     */
    RelatedUrlLabel: "Finding Aid" | "Hathi Trust" | "Related Information" | "Resource Guide" | null;
    /** @description Information about the representative image for the resource */
    RepresentativeFileSet: {
      aspect_ratio: number;
      /** Format: uuid */
      id?: string | null;
      /** Format: uri */
      url: string;
    };
    /**
     * @description Preservation status of the resource 
     * @enum {string|null}
     */
    Status: "Not Started" | "In Progress" | "Done" | null;
    /**
     * @description The access level of the resource 
     * @enum {string|null}
     */
    Visibility: "Private" | "Institution" | "Public" | null;
    /**
     * @description The media type of the resource 
     * @enum {string|null}
     */
    WorkType: "Audio" | "Image" | "Video" | null;
    /** @description A single work response */
    Work: {
      /** @description A summary of the resource */
      abstract: (string)[];
      /** @description Accession number for the work. Serves as basis for the filename. */
      accession_number: string;
      alternate_title: (string)[];
      /** @description DC API url */
      api_link: string | null;
      /** @description Type of resource. (Work, FileSet, Collection) */
      api_model: string | null;
      /** @description Archival Resource Key (ARK) */
      ark: string;
      /** @description Associated batch update operations */
      batch_ids: (string)[];
      /** @description Physical box name. Sometimes used with Distinctive Collections materials. */
      box_name: (string)[];
      /** @description Physical box number. Sometimes used with Distinctive Collections materials. */
      box_number: (string)[];
      /** @description The caption for a resource. */
      caption: (string)[];
      /** @description Alma bibliographic ID. */
      catalog_key: (string)[];
      /** @description The parent collection of the resource */
      collection?: {
        /** @description UUID of the collection */
        id: string;
        /** @description Description of the collection */
        description?: string | null;
        /** @description Title of the collection */
        title: string;
      };
      /** @description An entity responsible for making contributions to the resource */
      contributor: (components["schemas"]["ControlledTermWithRole"])[];
      /**
       * Format: date-time 
       * @description The creation date of the record in the repository.
       */
      create_date: string;
      /** @description An entity primarily responsible for making the resource */
      creator: (components["schemas"]["ControlledTerm"])[];
      /** @description Associated csv metadata update operations */
      csv_metadata_update_jobs: (string)[];
      /** @description The cultural context of the resource. */
      cultural_context: (string)[];
      /** @description A point or a period of time associatied with an event in the lifecycle of the resource. */
      date_created: (string)[];
      /** @description An account of the resource */
      description: (string)[];
      /** @description File sets associated with the resource */
      file_sets: (components["schemas"]["FileSetBase"])[];
      /** @description Name of the containing folder. */
      folder_names: (string)[];
      /** @description Number of the containing folder. */
      folder_numbers: (string)[];
      /** @description Describes what the original object is, not what it is about. */
      genre: (components["schemas"]["ControlledTerm"])[];
      /**
       * Format: uuid 
       * @description UUID for the work record in the repository
       */
      id: string;
      /** @description Identifiers for the object */
      identifier: (string)[];
      /** Format: uri */
      iiif_manifest: string | null;
      /** Format: date-time */
      indexed_at: string | null;
      /** @description Associated ingest project */
      ingest_project?: {
        /** Format: uuid */
        id: string;
        title: string;
      };
      /** @description Associated ingest sheet */
      ingest_sheet?: {
        /** Format: uuid */
        id: string;
        title: string;
      };
      /** @description Keywords or tags used to describe this content. */
      keywords: (string)[];
      /** @description A language of the resource. */
      language: (components["schemas"]["ControlledTerm"])[];
      /** @description PIDs from previous repository. */
      legacy_identifier: (string)[];
      library_unit: components["schemas"]["LibraryUnit"];
      /** @description Creative Commons licenses */
      license?: components["schemas"]["GenericIdLabel"];
      /** @description Place of publication. */
      location: (components["schemas"]["ControlledTerm"])[];
      /**
       * Format: date-time 
       * @description Date resource last modified in repository
       */
      modified_date: string;
      notes: ({
        note: string;
        type: components["schemas"]["NoteType"];
      })[];
      /** @description The material or physical carrier of the resource. */
      physical_description_material: (string)[];
      /** @description The size or duration of the resource. */
      physical_description_size: (string)[];
      preservation_level: components["schemas"]["PreservationLevel"];
      /** @description Project related information */
      project: {
        desc?: string | null;
        cycle?: string | null;
        manager?: string | null;
        name?: string | null;
        proposer?: string | null;
        task_number?: string | null;
      };
      /** @description Location of Physical Object // will also include messy dates. Information about the provenance, such as origin, ownership and custodial history (chain of custody), of a resource. */
      provenance: (string)[];
      /** @description Resource is available on Digital Collections. */
      published: boolean;
      /** @description An entity responsible for making the resource available. */
      publisher: (string)[];
      /** @description URL of a related resource. */
      related_url: ({
        /** Format: uri */
        url: string;
        label: components["schemas"]["RelatedUrlLabel"];
      })[];
      representative_file_set?: components["schemas"]["RepresentativeFileSet"];
      /** @description A person or organization owning or managing rights over the resource. */
      rights_holder: (string)[];
      /** @description Expresses the copyright status of the resource. */
      rights_statement?: components["schemas"]["GenericIdLabel"];
      /** @description Sometimes used with Distincitive Collections materials */
      scope_and_contents: (string)[];
      /** @description Sometimes used with Distincitive Collections materials. Used for archival series and subseries information. */
      series: (string)[];
      /** @description A related resource from which the described resource is derived. Source of digital object - book, journal, etc. Follow Chicago Manual of Style for citation. */
      source: (string)[];
      status: components["schemas"]["Status"];
      /** @description A defined style, historical period, group, school, dynasty, movement, etc. whose characteristics are represented in the work. */
      style_period: (components["schemas"]["ControlledTerm"])[];
      /** @description A defined style, historical period, group, school, dynasty, movement, etc. whose characteristics are represented in the work. */
      subject: (components["schemas"]["ControlledTermWithRole"])[];
      /** @description Used to provide the titles of separate works or parts of a resource. Information provided may also contain statements of responsibility or other sequential designations. */
      table_of_contents: (string)[];
      /** @description A defined style, historical period, group, school, dynasty, movement, etc. whose characteristics are represented in the work. */
      technique: (components["schemas"]["ControlledTerm"])[];
      /** @description Terms of use of resource. */
      terms_of_use: string | null;
      /**
       * Format: uri 
       * @description Url of thumbnail image.
       */
      thumbnail: string | null;
      /** @description A name given to the resource */
      title: string | null;
      visibility: components["schemas"]["Visibility"];
      work_type: components["schemas"]["WorkType"];
    };
  };
}