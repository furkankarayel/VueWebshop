create table role(
    id            int       primary key       not null,
    name          text                        not null
);

create table users(
   id             int       primary key       not null,
   name           text                        not null,
   email          text                        not null,
   password       varchar                     not null,
   role_id        int                         not null,
   constraint fk_role
      foreign key(role_id) 
	  references role(id)   
);

create table category(
    id            int       primary key       not null,
    name          text                        not null,
    description   char(100)                   not null
);

create table articlegroup(
   id             int       primary key       not null,
   name           text                        not null,
   description    char(100)                   not null,
   discount       integer,
   category_id       int                    not null,
   constraint fk_category
      foreign key(category_id) 
	  references category(id)
);

create table article(
   id               int       primary key       not null,
   name             text                        not null,
   ean              text                        not null,
   description      char(100)                   not null,
   articlegroup_id  int                         not null,
   constraint fk_articlegroup
      foreign key(articlegroup_id) 
	  references articlegroup(id)
);



